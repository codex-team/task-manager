
import StatusModel from '../../../database/models/status';
import TaskModel from '../../../database/models/task';
import mongoose from '../../../database';
import { ChangeTaskStatusPayload } from '../../../../../types/transport/requests/task/change-task-status';

/**
 * Updates task status
 *
 * @param params
 */
export async function changeTaskStatus(params: ChangeTaskStatusPayload): Promise<void> {
  const session = await mongoose.startSession();

  session.startTransaction();
  try {
    await TaskModel.findOneAndUpdate({ _id: params.taskId }, { statusId: params.newStatusId }).exec();

    if (params.newStatusId) {
      const newStatus = await StatusModel.findById(params.newStatusId);
      const newStatusTasks = newStatus?.tasks || [];

      if (params.newIndex) {
        newStatusTasks.splice(params.newIndex, 0, params.taskId);
      } else {
        newStatusTasks.push(params.taskId);
      }

      await StatusModel.findOneAndUpdate({ _id: params.newStatusId }, { tasks: newStatusTasks }).exec();
    }

    if (params.prevStatusId) {
      const prevStatus = await StatusModel.findById(params.prevStatusId);
      const prevStatusTasks = (prevStatus?.tasks || []).filter(id => id !== params.taskId);

      await StatusModel.findOneAndUpdate({ _id: params.newStatusId }, { tasks: prevStatusTasks }).exec();
    }
    await session.commitTransaction();
  } catch (e) {
    await session.abortTransaction();
    throw e;
  } finally {
    session.endSession();
  }
}
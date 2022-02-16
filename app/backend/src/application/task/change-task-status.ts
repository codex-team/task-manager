
import StatusModel from 'database/models/status';
import TaskModel from 'database/models/task';
import { ChangeTaskStatusPayload } from 'types/transport/requests/task/change-task-status';
import { ChangeTaskStatusResponsePayload } from 'types/transport/responses/task/change-task-status';
import Mongoose from 'mongoose';

/**
 * Updates task status
 *
 * @param params - data required to change task status
 */
export async function changeTaskStatus(params: ChangeTaskStatusPayload): Promise<ChangeTaskStatusResponsePayload> {
  const response: ChangeTaskStatusResponsePayload = { };

  if (params.prevStatusId) {
    const prevStatus = await StatusModel.findById(params.prevStatusId);
    const prevStatusTasks = (prevStatus?.tasks || []).filter(id => !(id as unknown as Mongoose.Types.ObjectId).equals(new Mongoose.Types.ObjectId(params.taskId)));
    const prevStatusUpdated = await StatusModel.findOneAndUpdate({ _id: params.prevStatusId }, { tasks: prevStatusTasks }, { new: true }).exec();

    response.prevStatus = prevStatusUpdated;
  }
  if (params.newStatusId) {
    const task = await TaskModel.findOneAndUpdate({ _id: params.taskId }, { statusId: params.newStatusId }, { new: true }).exec();

    response.task = task;

    const newStatus = await StatusModel.findById(params.newStatusId);
    const newStatusTasks = newStatus?.tasks || [];

    if (params.newIndex !== null && params.newIndex !== undefined) {
      newStatusTasks.splice(params.newIndex, 0, params.taskId);
    } else {
      newStatusTasks.push(params.taskId);
    }

    const newStatusUpdated = await StatusModel.findOneAndUpdate({ _id: params.newStatusId }, { tasks: newStatusTasks }, { new: true }).exec();

    response.newStatus = newStatusUpdated;
  } else {
    // Task becomes unsorted
    const task = await TaskModel.findOneAndUpdate({ _id: params.taskId }, { $unset: { statusId: '' } }, { new: true }).exec();

    response.task = task;
  }


  return response;
}
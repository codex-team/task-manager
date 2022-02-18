
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
  const task = await TaskModel.findById(params.taskId);

  if (!task) {
    return response;
  }

  // Remove taskId from previous status tasks array
  if (task.statusId) {
    const prevStatus = await StatusModel.findById(task.statusId);
    const prevStatusTasks = (prevStatus?.tasks || []).filter(id => !(id as unknown as Mongoose.Types.ObjectId).equals(new Mongoose.Types.ObjectId(params.taskId)));
    const prevStatusUpdated = await StatusModel.findOneAndUpdate({ _id: task.statusId }, { tasks: prevStatusTasks }, { new: true }).exec();

    response.prevStatus = prevStatusUpdated;
  }

  // Update task status id
  task.statusId = params.newStatusId;
  await task.save();
  response.task = task;

  // Push task id to new status tasks array
  if (params.newStatusId) {
    const newStatus = await StatusModel.findById(params.newStatusId);

    if (newStatus) {
      const newStatusTasks = newStatus.tasks || [];

      if (params.newIndex !== null && params.newIndex !== undefined) {
        newStatusTasks.splice(params.newIndex, 0, params.taskId);
      } else {
        newStatusTasks.push(params.taskId);
      }
      newStatus.tasks = newStatusTasks;
      await newStatus.save();

      response.newStatus = newStatus;
    }
  }

  return response;
}
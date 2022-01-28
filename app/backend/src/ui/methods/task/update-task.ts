import Task from '../../../../../types/entities/task';
import { UpdateTaskPayload } from '../../../../../types/transport/requests/task/update-task';
import TaskModel from '../../../database/models/task';
import StatusModel from '../../../database/models/status';

/**
 * Updates existing task
 *
 * @param data - task update params
 */
export async function updateTask(data: UpdateTaskPayload): Promise<Task | null> {
  const query = { _id: data._id };

  const task = await TaskModel.findOneAndUpdate(query, data, { new: true }).exec();

  if (!task) {
    return null;
  }
  // Add expanded status data (if any) to result object
  const status = await StatusModel.findById(task?.statusId).exec();

  if (!status) {
    return task.toObject();
  }

  return {
    ...(task.toObject()),
    status,
  };
}

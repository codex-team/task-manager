import Task from '../../../../../types/entities/task';
import { UpdateTaskPayload } from '../../../../../types/transport/requests/task/update-task';
import TaskModel from '../../../database/models/task';

/**
 * Updates existing task
 *
 * @param data - task update params
 */
export async function updateTask(data: UpdateTaskPayload): Promise<Task | null> {
  const query = { _id: data._id };

  return TaskModel.findOneAndUpdate(query, data, { new: true }).exec();
}

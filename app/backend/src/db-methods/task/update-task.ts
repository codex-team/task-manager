import Task from '../../../../types/entities/task';
import TaskSchema from '../../database/models/task';
import { UpdateTaskPayload } from '../../../../types/transport/requests/task/update-task';

/**
 * Updates existing task
 *
 * @param data - task update params
 */
export async function updateTask(data: UpdateTaskPayload): Promise<Task | null> {
  const query = { _id: data._id };

  return TaskSchema.findOneAndUpdate(query, data).exec();
}

import { Task } from 'types/entities';
import TaskSchema from 'database/models/task';

/**
 * Updates existing task
 *
 * @param _id - task's identifier
 * @param [text] - task's content
 * @param [orderScore] - task's order rank
 * @param [statusId] - task's status id
 */
export async function updateTask(_id: string, text?: string, orderScore?: number, statusId?: string): Promise<Task | null> {
  const query = { _id };
  const data = {
    _id,
    text,
    orderScore,
    statusId,
  };

  return TaskSchema.findOneAndUpdate(query, data, { new: true }).exec();
}

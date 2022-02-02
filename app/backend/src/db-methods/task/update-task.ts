import Task from '../../../../types/entities/task';
import TaskSchema from '../../database/models/task';

/**
 * Updates existing task
 *
 * @param _id - task's identifier
 * @param [text] - task's content
 * @param [orderScore] - task's order rank
 */
export async function updateTask(_id: string, text?: string, orderScore?: number): Promise<Task | null> {
  const query = { _id };
  const data = {
    _id,
    text,
    orderScore,
  };

  return TaskSchema.findOneAndUpdate(query, data).exec();
}

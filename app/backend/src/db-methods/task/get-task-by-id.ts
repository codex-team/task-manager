import Task from '../../../../types/entities/task';
import TaskSchema from '../../database/models/task';

/**
 * Returns task by id or null
 *
 * @param taskId - task id to be found
 */
export async function getTaskById(taskId: string): Promise<Task | null> {
  return TaskSchema.findById(taskId).exec();
}

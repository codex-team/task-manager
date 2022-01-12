import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Returns task by id or null
 *
 * @param [taskId] - task's identifier,
 */
export async function getTaskById(taskId: string): Promise<Task | null> {
  return TaskSchema.findById(taskId).exec();
}

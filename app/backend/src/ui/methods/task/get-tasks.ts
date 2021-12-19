import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Returns list of stored tasks
 */
export async function getTasks(): Promise<Task[]> {
  return TaskSchema
    .find()
    .exec();
}

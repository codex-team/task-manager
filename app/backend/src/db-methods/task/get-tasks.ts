import Task from '../../../../types/entities/task';
import TaskSchema from '../../database/models/task';

/**
 * Returns list of stored tasks
 *
 * @param [projectId] - task's project identifier,
 */
export async function getTasks(projectId?: string): Promise<Task[]> {
  let filter = {};

  if (projectId) {
    filter = {
      projectId: projectId,
    };
  }

  return TaskSchema
    .find(filter)
    .sort([ ['orderScore', -1] ])
    .exec();
}

import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Creates new task
 *
 * @param body- body of task
 * @param projectId- project id of task
 * @param parentId? - parent id of task (for subtask)
 * @param assignees?- array of task assignees
 * @param body
 * @param projectId
 * @param parentId
 * @param assignees
 */
export async function createTask(body: string, projectId: string, parentId?: string, assignees?: string[]): Promise<Task> {
  return await TaskSchema.create({
    body,
    projectId,
    parentId,
    assignees,
  });
}

import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Creates new task
 *
 * @param text - text of a task
 * @param projectId- project id of task
 * @param parentId? - parent id of task (for subtask)
 * @param assignees?- array of task assignees
 * @param projectId
 * @param parentId
 * @param assignees
 */
export async function createTask(text: string, projectId: string, parentId?: string, assignees?: string[]): Promise<Task> {
  return await TaskSchema.create({
    text,
    projectId,
    parentId,
    assignees,
  });
}

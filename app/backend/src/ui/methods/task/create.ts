import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Creates new task
 *
 * @param title- title of task
 * @param projectId- project id of task
 * @param parentId - parent id of task (for subtask)
 * @param description- description of task
 * @param assignees- array of task assignees
 */
export async function createTask(title: string, projectId: string, parentId?: string, description?: string, assignees?: string[]): Promise<Task> {
  return await TaskSchema.create({
    title,
    projectId,
    parentId,
    description,
    assignees,
  });
}

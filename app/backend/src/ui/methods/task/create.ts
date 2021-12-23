import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Creates new task
 *
 * @param text - text of a task
 * @param [projectId] - task's project identifier
 * @param [parentId] - id of the parent task (for subtask)
 * @param [assignees] - an array of task assignees
 */
export async function createTask(text: string, projectId?: string, parentId?: string, assignees?: string[]): Promise<Task> {
  return await TaskSchema.create({
    text,
    projectId,
    parentId,
    assignees,
  });
}

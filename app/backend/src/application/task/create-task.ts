import { Task } from 'types/entities';
import TaskSchema from 'database/models/task';

/**
 * Creates new task
 *
 * @param text - task's text
 * @param orderScore - task's order score
 * @param [projectId] - task's project identifier
 * @param [parentId] - id of the parent task (for subtask)
 * @param [assignees] - an array of task assignees
 */
export async function createTask(text: string, orderScore: number, projectId?: string, parentId?: string, assignees?: string[]): Promise<Task> {
  return await TaskSchema.create({
    text,
    orderScore,
    projectId,
    parentId,
    assignees,
  });
}

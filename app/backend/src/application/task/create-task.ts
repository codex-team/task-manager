import TaskModel from 'database/models/task';
import StatusModel from 'database/models/status';
import { Status, Task } from 'types/entities';


/**
 * Create task operation result
 */
interface CreateTaskResult {
  /**
   * Response sample
   */
  task: Task;

  /**
   * Updated status object in case task was created with statusId specified
   */
  status?: Status | null;
}

/**
 * Creates new task
 *
 * @param text - task's text
 * @param orderScore - task's order score
 * @param [projectId] - task's project identifier
 * @param [parentId] - id of the parent task (for subtask)
 * @param [assignees] - an array of task assignees
 * @param statusId - id of the status the task has
 */
export async function createTask(text: string, orderScore: number, projectId?: string, parentId?: string, assignees?: string[], statusId?: string | null): Promise<CreateTaskResult> {
  const result = { } as CreateTaskResult;
  const task = await TaskModel.create({
    text,
    orderScore,
    projectId,
    parentId,
    assignees,
    statusId,
  });

  result.task = task;

  if (statusId) {
    const status = await StatusModel.findById(statusId);

    if (status) {
      const newStatusTasks = status?.tasks || [];

      newStatusTasks.push(task._id);
      status.tasks = newStatusTasks;
      await status.save();

      result.status = status;
    }
  }

  return result;
}

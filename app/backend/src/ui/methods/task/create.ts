import TaskModel from '../../../database/models/task';
import StatusModel from '../../../database/models/status';
import mongoose from '../../../database';
import { CreateTaskResponsePayload } from '../../../../../types/transport/responses/task/create';

/**
 * Creates new task
 *
 * @param text - text of a task
 * @param orderScore - task order score
 * @param [projectId] - task's project identifier
 * @param [parentId] - id of the parent task (for subtask)
 * @param [assignees] - an array of task assignees
 * @param statusId - id of the status the task has
 */
export async function createTask(text: string, orderScore: number, projectId?: string, parentId?: string, assignees?: string[], statusId?: string): Promise<CreateTaskResponsePayload> {
  const response = {} as CreateTaskResponsePayload;
  const session = await mongoose.startSession();

  session.startTransaction();
  try {
    const task = await TaskModel.create({
      text,
      orderScore,
      projectId,
      parentId,
      assignees,
      statusId,
    });

    response.task = task;

    if (statusId) {
      const status = await StatusModel.findById(statusId);
      const newStatusTasks = status?.tasks || [];

      newStatusTasks.push(task._id);
      const updatedStatus = await StatusModel.findOneAndUpdate({ _id: statusId }, { tasks: newStatusTasks }, { new: true }).exec();

      response.status = updatedStatus;
    }
    await session.commitTransaction();

    return response;
  } catch (e) {
    await session.abortTransaction();
    throw e;
  } finally {
    session.endSession();
  }
}


import StatusModel from 'database/models/status';
import TaskModel from 'database/models/task';
import { Types } from 'mongoose';
import { Task } from 'types/entities';


/**
 * Returns list without item specified
 *
 * @param list - list to filter out item from
 * @param item - item to filter out
 */
function getListWithoutItem(list: Types.ObjectId[], item: Types.ObjectId): Types.ObjectId[] {
  return list.filter(id => !id.equals(item));
}

/**
 * Updates task status
 *
 * @param taskId - Id of the task status of which should be updated
 * @param newStatusId - New task status if exists
 * @param newIndex - Index of the task in new status tasks array
 */
export async function changeTaskStatus(taskId: string, newStatusId?: string, newIndex?: number): Promise<Task> {
  const task = await TaskModel.findById(taskId);

  if (!task) {
    throw new Error(`Task not found: ${taskId}`);
  }

  // Remove taskId from previous status tasks array
  if (task.statusId) {
    const prevStatus = await StatusModel.findById(task.statusId);

    if (!prevStatus) {
      throw new Error(`Status not found: ${task.statusId}`);
    }
    const prevStatusTasks = getListWithoutItem(prevStatus?.tasks as unknown as Types.ObjectId[], new Types.ObjectId(taskId));

    await StatusModel.findOneAndUpdate({ _id: task.statusId }, { tasks: prevStatusTasks as unknown as string[] }).exec();
  }

  // Update task status id
  task.statusId = newStatusId;
  await task.save();

  // Push task id to new status tasks array
  if (newStatusId) {
    const newStatus = await StatusModel.findById(newStatusId);

    if (!newStatus) {
      throw new Error(`Status not found: ${newStatusId}`);
    }
    const newStatusTasks = newStatus.tasks || [];

    if (newIndex !== null && newIndex !== undefined) {
      newStatusTasks.splice(newIndex, 0, taskId);
    } else {
      newStatusTasks.push(taskId);
    }
    newStatus.tasks = newStatusTasks;
    await newStatus.save();
  }

  return task;
}
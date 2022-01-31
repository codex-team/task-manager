import { Types } from 'mongoose';
import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Returns list of stored tasks
 *
 * @param [projectId] - task's project identifier,
 */
export async function getTasks(projectId?: string): Promise<Task[]> {
  const query = projectId ? { projectId: new Types.ObjectId(projectId) } : {};

  return TaskSchema.aggregate([
    { $match: query },
    // Add expanded status data (if any) to result object
    { $lookup: {
      from: 'statuses',
      localField: 'statusId',
      foreignField: '_id',
      as: 'status',
    } },
    // Retrieves element with index 0 from found statuses array
    { $set: {
      status: { $arrayElemAt: ['$status', 0] },
    } },
    { $sort: {
      orderScore: -1,
    } },
  ]);
}

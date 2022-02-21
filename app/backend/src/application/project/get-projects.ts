import { Project } from 'types/entities';
import ProjectSchema from 'database/models/project';
import mongoose from '../../../src/database/index';

/**
 * Returns list of stored projects
 *
 * @param [workspaceId] - project's workspace id
 */
// eslint-disable-next-line no-unused-vars
export async function getProjects(workspaceId?: string): Promise<Project[]> {
  return ProjectSchema
    .aggregate([
      { $match: {
        workspaceId: new mongoose.Types.ObjectId(workspaceId),
      } },
      // Add expanded statuses data (if any) to result object
      { $lookup: {
        from: 'statuses',
        localField: '_id',
        foreignField: 'projectId',
        as: 'taskStatuses',
      } },
    ]);
}

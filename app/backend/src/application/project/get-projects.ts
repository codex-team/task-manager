import { Project } from 'types/entities';
import ProjectSchema from 'database/models/project';

/**
 * Returns list of stored projects
 */
// eslint-disable-next-line no-unused-vars
export async function getProjects(): Promise<Project[]> {
  return ProjectSchema
    .aggregate([
      // Add expanded statuses data (if any) to result object
      { $lookup: {
        from: 'statuses',
        localField: '_id',
        foreignField: 'projectId',
        as: 'taskStatuses',
      } },
    ]);
}

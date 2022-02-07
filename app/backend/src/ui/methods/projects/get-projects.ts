import Project from '../../../../../types/entities/project';
import ProjectSchema from '../../../database/models/project';

/**
 * Returns list of stored projects
 */
export async function getProjects(): Promise<Project[]> {
  return ProjectSchema.aggregate([
    // Add expanded statuses data (if any) to result object
    { $lookup: {
      from: 'statuses',
      localField: '_id',
      foreignField: 'projectId',
      as: 'taskStatuses',
    } },
  ]);
}

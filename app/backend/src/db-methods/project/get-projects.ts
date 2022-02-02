import Project from '../../../../types/entities/project';
import ProjectSchema from '../../database/models/project';

/**
 * Returns list of stored projects
 *
 * @param workspaceId
 */
export async function getProjects(workspaceId?: string): Promise<Project[]> {
  return ProjectSchema
    .find({
      workspaceId,
    })
    .exec();
}

import Project from '../../../../types/entities/project';
import ProjectSchema from '../../database/models/project';

/**
 * Returns list of stored project
 */
export async function getProjects(): Promise<Project[]> {
  return ProjectSchema
    .find()
    .exec();
}

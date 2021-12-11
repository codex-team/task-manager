import Project from '../../../../../types/entities/project';
import ProjectSchema from '../../../database/models/project';

/**
 * @param workspaceId
 */
export async function getProjects(workspaceId: string | undefined): Promise<Project[]> {
  let project;

  await ProjectSchema.find()
    .exec()
    .then(result => {
      project = result;
    });

  return project;
}

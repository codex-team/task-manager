import Project from '../../../../../types/entities/project';
import ProjectSchema from '../../../database/models/project';

/**
 * @param id
 * @param newPicture
 */
export async function updatePicture(id: string, newPicture: string): Promise<Project> {
  let project;

  await ProjectSchema.findByIdAndUpdate(id,
    { picture: newPicture }, { new: true })
    .exec()
    .then(result => {
      project = result;
    });

  return project;
}

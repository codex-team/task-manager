import Project from '../../../../../types/entities/project';
import ProjectSchema from '../../../database/models/project';

/**
 * @param id
 * @param newTitle
 */
export async function updateTitle(id: string, newTitle: string): Promise<Project> {
  let project;

  await ProjectSchema.findByIdAndUpdate(id,
    { title: newTitle }, { new: true })
    .exec()
    .then(result => {
      project = result;
    });

  return project;
}

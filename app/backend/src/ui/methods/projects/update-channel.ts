import Project from '../../../../../types/entities/project';
import ProjectSchema from '../../../database/models/project';

/**
 * @param id
 * @param newChannel
 */
export async function updateChannel(id: string, newChannel: string): Promise<Project> {
  let project;

  await ProjectSchema.findByIdAndUpdate(id,
    { messengerChannelUrl: newChannel }, { new: true })
    .exec()
    .then(result => {
      project = result;
    });

  return project;
}

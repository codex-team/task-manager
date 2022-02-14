import Project from '../../../../../types/entities/project';
import ProjectModel from '../../../database/models/project';

/**
 * Update the project
 *
 * @param _id - project id
 * @param title - project title
 * @param picture - project picture url
 * @param messengerChannelUrl - project messenger channel url
 */
export async function updateProject(_id: string, title: string, picture?: string, messengerChannelUrl?: string): Promise<Project | null> {
  return await ProjectModel.findOneAndUpdate({ _id },
    {
      $set: {
        title,
        picture,
        messengerChannelUrl,
      },
    }, { new: true }).exec();
}

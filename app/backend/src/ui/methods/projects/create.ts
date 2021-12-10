import Project from '../../../../../types/entities/project';
import ProjectSchema from '../../../database/models/project';

/**
 * @param title
 * @param picture
 * @param messenger
 */
export async function createProject(title: string, picture: string | undefined, messenger: string | undefined): Promise<Project> {
  return await ProjectSchema.create({
    title: title,
    picture: picture,
    messengerChannelUrl: messenger,
  });
}

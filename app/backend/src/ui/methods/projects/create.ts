import Project from '../../../database/models/project';

/**
 * @param title
 * @param picture
 * @param messenger
 */
export function createProject(title: string, picture: string | undefined, messenger: string | undefined) {
  return Project.create({
    title: title,
    picture: picture,
    messengerChannelUrl: messenger,
  });
}

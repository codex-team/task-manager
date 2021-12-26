import Project from '../../../../types/entities/project';
import ProjectSchema from '../../database/models/project';

/**
 * Creates new project
 *
 * @param title - project title
 * @param picture - project picture url
 * @param messengerChannelUrl - project messenger channel url
 */
export async function createProject(title: string, picture?: string, messengerChannelUrl?: string): Promise<Project> {
  return await ProjectSchema.create({
    title,
    picture,
    messengerChannelUrl,
  });
}

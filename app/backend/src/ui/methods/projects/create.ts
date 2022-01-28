import Project from '../../../../../types/entities/project';
import ProjectSchema from '../../../database/models/project';
import { createStatus } from '../statuses/create-status';

/**
 * List of predefined status labels
 */
const PREDEFINED_STATUSES = ['To do', 'In progress', 'Done'];

/**
 * Creates new project
 *
 * @param title - project title
 * @param picture - project picture url
 * @param messengerChannelUrl - project messenger channel url
 */
export async function createProject(title: string, picture?: string, messengerChannelUrl?: string): Promise<Project> {
  const newProject = await ProjectSchema.create({
    title,
    picture,
    messengerChannelUrl,
  });

  for (const label of PREDEFINED_STATUSES) {
    await createStatus({
      label,
      projectId: newProject.toObject()._id,
    });
  }

  return newProject;
}

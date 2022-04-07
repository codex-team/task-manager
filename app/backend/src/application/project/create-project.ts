import { Project } from 'types/entities';
import ProjectSchema from 'database/models/project';
import { createStatus } from 'application/status/create-status';

/**
 * List of predefined status labels
 */
const PREDEFINED_STATUSES = ['To do', 'In progress', 'Done'];

/**
 * Creates standard predefined statuses for project with specified id
 *
 * @param projectId - id of the project statuses are created for
 */
async function createStandardStatuses(projectId: string): Promise<void> {
  for (const label of PREDEFINED_STATUSES) {
    await createStatus(
      label,
      projectId
    );
  }
}

/**
 * Creates new project
 *
 * @param title - project title
 * @param [picture] - project picture url
 * @param [messengerChannelUrl] - project messenger channel url
 */
export async function createProject(title: string, picture?: string, messengerChannelUrl?: string): Promise<Project> {
  const newProject = await ProjectSchema.create({
    title,
    picture,
    messengerChannelUrl,
  });

  await createStandardStatuses(newProject.toObject()._id);

  return newProject;
}

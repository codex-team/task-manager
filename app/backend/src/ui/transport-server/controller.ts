import { ApiRequest, ApiResponse } from '../../../../types/transport';
import { createProject } from '../methods/projects/create';
import { getProjects } from '../methods/projects/get-projects';
import { createTask } from '../methods/task/create';
import { getTasks } from '../methods/task/get-tasks';

/**
 * Handles CTProto messages
 *
 * @param message - received message
 */
export async function handleMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
  switch (message.type) {
    case 'create-project': return {
      project: await createProject(
        message.payload.title,
        message.payload.picture,
        message.payload.messengerChannelUrl
      ),
    };
    case 'get-projects': return {
      projects: await getProjects(),
    };
    case 'create-task': return {
      task: await createTask(
        message.payload.text,
        message.payload.projectId,
        message.payload.parentId,
        message.payload.assignees
      ),
    };
    case 'get-tasks': return {
      tasks: await getTasks(message.payload.projectId),
    };
  }
}

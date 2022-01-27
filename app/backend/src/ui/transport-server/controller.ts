import { ApiRequest, ApiResponse } from '../../../../types/transport';
import { createProject } from '../methods/projects/create';
import { getProjects } from '../methods/projects/get-projects';
import { createTask } from '../methods/task/create';
import { getTasks } from '../methods/task/get-tasks';
import { getTaskById } from '../methods/task/get-task-by-id';
import { updateTask } from '../methods/task/update-task';
import { getStatuses } from '../methods/statuses/get-statuses';
import { updateStatus } from '../methods/statuses/update-status';

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
        message.payload.orderScore,
        message.payload.projectId,
        message.payload.parentId,
        message.payload.assignees
      ),
    };
    case 'get-tasks': return {
      tasks: await getTasks(message.payload.projectId),
    };
    case 'get-task-by-id': return {
      task: await getTaskById(message.payload.taskId) }
    ;
    case 'update-task': return {
      task: await updateTask(message.payload),
    };
    case 'get-statuses': return {
      statuses: await getStatuses(message.payload.projectId),
    };
    case 'update-status': return {
      status: await updateStatus(message.payload),
    };
  }
}

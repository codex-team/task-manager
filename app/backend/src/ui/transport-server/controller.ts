import { ApiRequest, ApiResponse } from '../../../../types/transport';
import { createProject } from '../methods/projects/create';
import { getProjects } from '../methods/projects/get-projects';
import { createTask } from '../methods/task/create';
import { getTasks } from '../methods/task/get-tasks';
import { getTaskById } from '../methods/task/get-task-by-id';
import { updateTask } from '../methods/task/update-task';
import { getStatuses } from '../methods/statuses/get-statuses';
import { createTeammate } from '../methods/teammate/create';
import { getTeammates } from '../methods/teammate/get-teammates';
import { getTeammateById } from '../methods/teammate/get-teammate-by-id';
import { updateTeammate } from '../methods/teammate/update-teammate';
import { removeTeammateById } from '../methods/teammate/remove-teammate-by-id';
import { changeTaskStatus } from '../methods/task/change-task-status';

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
    case 'create-task': return createTask(
      message.payload.text,
      message.payload.orderScore,
      message.payload.projectId,
      message.payload.parentId,
      message.payload.assignees,
      message.payload.statusId
    );
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
    case 'change-task-status': return changeTaskStatus(message.payload);
    case 'create-teammate': return {
      teammate: await createTeammate(
        message.payload.name,
        message.payload.photo,
        message.payload.contacts
      ),
    };
    case 'get-teammates': return {
      teammates: await getTeammates(message.payload.workspaceId),
    };
    case 'get-teammate-by-id': return {
      teammate: await getTeammateById(message.payload.teammateId),
    };
    case 'update-teammate': return {
      teammate: await updateTeammate(message.payload),
    };
    case 'remove-teammate-by-id': return removeTeammateById(message.payload.teammateId);
  }
}

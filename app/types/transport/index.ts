import TaskCreatedMessage from './outgoing/task-created';
import Authorize from './requests/authorize';
import GetProjectsMessage from './requests/project/get-projects';
import AuthorizeResponse from './responses/authorize';
import GetProjectsResponse from './responses/project/get-projects';
import CreateProjectMessage from './requests/project/create';
import CreateProjectResponse from './responses/project/create';
import CreateTaskMessage from './requests/task/create';
import CreateTaskResponse from './responses/task/create';
import GetTasksMessage from './requests/task/get-tasks';
import GetTasksResponse from './responses/task/get-tasks';
import GetTaskByIdResponse from './responses/task/get-task-by-id';
import GetTaskByIdMessage from './requests/task/get-task-by-id';
import UpdateTaskMessage from './requests/task/update-task';
import UpdateTaskResponse from './responses/task/update-task'

/**
 * The type described all available outgoing messages that can be sent by API
 */
export type ApiUpdate =
  | TaskCreatedMessage
;

/**
 * The type described all available API request messages
 */
export type ApiRequest =
  | Authorize
  | CreateProjectMessage
  | GetProjectsMessage
  | CreateTaskMessage
  | GetTasksMessage
  | GetTaskByIdMessage
  | UpdateTaskMessage
;

/**
 * The type described all available API response messages
 */
export type ApiResponse =
  | AuthorizeResponse
  | CreateProjectResponse
  | GetProjectsResponse
  | CreateTaskResponse
  | GetTasksResponse
  | GetTaskByIdResponse
  | UpdateTaskResponse
;

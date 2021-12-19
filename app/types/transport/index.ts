import TaskCreatedMessage from './outgoing/task-created';
import Authorize from './requests/authorize';
import GetProjectsMessage from './requests/project/get-projects';
import AuthorizeResponse from './responses/authorize';
import GetProjectsResponse from './responses/project/get-projects';
import UpdateProjectTitle from './requests/project/update-title';
import UpdateProjectTitleResponse from './responses/project/update-title';
import CreateProjectMessage from './requests/project/create';
import CreateProjectResponse from './responses/project/create';
import UpdateProjectPicture from './requests/project/update-picture';
import UpdateProjectPictureResponse from './responses/project/update-picture';
import UpdateProjectChannel from './requests/project/update-channel';
import UpdateProjectChannelResponse from './responses/project/update-channel';
import CreateTaskMessage from "./requests/task/create";
import CreateTaskResponse from "./responses/task/create";
import GetTasksMessage from "./requests/task/get-tasks";
import GetTasksResponse from "./responses/task/get-tasks";

/**
 * The type described all available outgoing messages that can be sent by API
 */
export type ApiUpdate =
  | TaskCreatedMessage;

/**
 * The type described all available API request messages
 */
export type ApiRequest =
  | Authorize
  | CreateProjectMessage
  | GetProjectsMessage
  | UpdateProjectTitle
  | UpdateProjectPicture
  | UpdateProjectChannel
  | CreateTaskMessage
  | GetTasksMessage
;

/**
 * The type described all available API response messages
 */
export type ApiResponse =
  | AuthorizeResponse
  | CreateProjectResponse
  | GetProjectsResponse
  | UpdateProjectTitleResponse
  | UpdateProjectPictureResponse
  | UpdateProjectChannelResponse
  | CreateTaskResponse
  | GetTasksResponse
;

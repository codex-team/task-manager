import TaskCreatedMessage from './outgoing/task-created';
import Authorize from './requests/authorize';
import GetProjectsMessage from './requests/project/get-projects';
import AuthorizeResponse from './responses/authorize';
import GetProjectsResponse from "./responses/project/get-projects";
import UpdateProjectName from "./requests/project/update-name";
import UpdateProjectNameResponse from "./responses/project/update-name";
import CreateProject from "./requests/project/create";
import CreateProjectResponse from "./responses/project/create";
import UpdateProjectPicture from "./requests/project/update-picture";
import UpdateProjectPictureResponse from "./responses/project/update-picture";
import UpdateProjectChannel from "./requests/project/update-channel";
import UpdateProjectChannelResponse from "./responses/project/update-channel";

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
  | CreateProject
  | GetProjectsMessage
  | UpdateProjectName
  | UpdateProjectPicture
  | UpdateProjectChannel
;

/**
 * The type described all available API response messages
 */
export type ApiResponse =
  | AuthorizeResponse
  | CreateProjectResponse
  | GetProjectsResponse
  | UpdateProjectNameResponse
  | UpdateProjectPictureResponse
  | UpdateProjectChannelResponse
;

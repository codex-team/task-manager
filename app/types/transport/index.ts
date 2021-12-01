import TaskCreatedMessage from './outgoing/task-created';
import Authorize from './requests/authorize';
import GetProjectsMessage from './requests/get-projects';
import AuthorizeResponse from './responses/authorize';
import GetProjectsResponse from "./responses/get-projects";

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
  | GetProjectsMessage
;

/**
 * The type described all available API response messages
 */
export type ApiResponse =
  | AuthorizeResponse
  | GetProjectsResponse
;

import Authorize from './requests/authorize';
import AuthorizeResponse from './responses/authorize';
import TaskCreatedMessage from './outgoing/task-created';

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
;

/**
 * The type described all available API response messages
 */
export type ApiResponse =
  | AuthorizeResponse
;

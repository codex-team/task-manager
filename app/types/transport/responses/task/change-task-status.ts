import { ResponseMessage } from 'ctproto';
import Task from '../../../entities/task';

/**
 * Response for 'change-task-status' message
 */
export interface ChangeTaskStatusResponsePayload {}

/**
 * Describes the response of updating task status
 */
export default interface ChangeTaskStatusResponse extends ResponseMessage<ChangeTaskStatusResponsePayload> {}

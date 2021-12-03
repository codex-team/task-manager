import { ResponseMessage } from 'ctproto';

export interface CreateProjectResponsePayload {
  message: string;
}

export default interface CreateProjectResponse extends ResponseMessage<CreateProjectResponsePayload> {}

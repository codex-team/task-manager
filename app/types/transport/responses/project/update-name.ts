import { ResponseMessage } from 'ctproto';

export interface UpdateProjectNameResponsePayload {
  message: string;
}

export default interface UpdateProjectNameResponse extends ResponseMessage<UpdateProjectNameResponsePayload> {}

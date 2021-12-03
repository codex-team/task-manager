import { ResponseMessage } from 'ctproto';

export interface UpdateProjectChannelResponsePayload {
  message: string;
}

export default interface UpdateProjectChannelResponse extends ResponseMessage<UpdateProjectChannelResponsePayload> {}

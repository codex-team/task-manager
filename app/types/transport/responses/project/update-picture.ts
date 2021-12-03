import { ResponseMessage } from 'ctproto';

export interface UpdateProjectPictureResponsePayload {
  message: string;
}

export default interface UpdateProjectPictureResponse extends ResponseMessage<UpdateProjectPictureResponsePayload> {}

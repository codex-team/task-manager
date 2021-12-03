import { NewMessage } from 'ctproto';

export interface UpdateProjectPicturePayload {
  id: string;
  newPicture: string;
}

export default interface UpdateProjectPicture extends NewMessage<UpdateProjectPicturePayload> {
  type: 'update-project-picture';
}

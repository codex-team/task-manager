import { NewMessage } from 'ctproto';

export interface UpdateProjectChannelPayload {
  id: string;
  newChannel: string;
}

export default interface UpdateProjectChannel extends NewMessage<UpdateProjectChannelPayload> {
  type: 'update-project-channel';
}

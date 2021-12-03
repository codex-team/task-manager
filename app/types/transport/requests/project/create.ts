import { NewMessage } from 'ctproto';

export interface CreateProjectPayload {
  title: string;
  picture?: string;
  messengerChannelUrl?: string;
}

export default interface CreateProject extends NewMessage<CreateProjectPayload> {
  type: 'create-project';
}

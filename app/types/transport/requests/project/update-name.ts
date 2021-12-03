import { NewMessage } from 'ctproto';

export interface UpdateProjectNamePayload {
  id: string;
  newTitle: string;
}

export default interface UpdateProjectName extends NewMessage<UpdateProjectNamePayload> {
  type: 'update-project-name';
}

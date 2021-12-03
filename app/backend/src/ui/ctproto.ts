import {CTProtoServer} from 'ctproto';
import {AuthorizeMessagePayload} from '../../../types/transport/requests/authorize';
import {AuthorizeResponsePayload} from '../../../types/transport/responses/authorize';
import {ApiRequest, ApiResponse, ApiUpdate} from '../../../types/transport';
import Project from '../database/models/project';

/**
 * Available options of CTProto transport
 */
export interface TransportServerOptions {
  /**
   * What token we should use to authorize clients
   */
  authToken: string;
}

/**
 * Creates CTProto server instance
 *
 * @param options - available parameters
 * @param options.authToken - token we use to authorize clients
 */
export function createTransportServer({authToken}: TransportServerOptions): CTProtoServer<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate> {
  return new CTProtoServer<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
    port: 3080,
    async onAuth(authRequestPayload: AuthorizeMessagePayload): Promise<AuthorizeResponsePayload> {
      if (authRequestPayload.token == authToken) {
        return {
          userId: '123',
        };
      }

      throw new Error('Example of unsuccessful auth');
    },

    async onMessage(message: ApiRequest): Promise<ApiResponse['payload'] | void> {
      if (message.type === 'create-project') {
        const newProject = await Project.create({
          title: message.payload.title,
          picture: message.payload.picture,
          messengerChannelUrl: message.payload.messengerChannelUrl,
        });

        return {
          message: 'project created: ' + newProject._id,
        };
      }

      if (message.type === 'update-project-name') {
        await Project.findByIdAndUpdate(message.payload.id,
          { title: message.payload.newTitle });

        return {
          message: 'project title updated: ' + message.payload.id,
        };
      }

      if (message.type === 'update-project-picture') {
        await Project.findByIdAndUpdate(message.payload.id,
          { picture: message.payload.newPicture });

        return {
          message: 'project picture updated: ' + message.payload.id,
        };
      }

      if (message.type === 'update-project-channel') {
        await Project.findByIdAndUpdate(message.payload.id,
          { messengerChannelUrl: message.payload.newChannel });

        return {
          message: 'project picture updated: ' + message.payload.id,
        };
      }

      if (message.type === 'get-projects') {
        return {
          projects: [
            {
              id: 'pj1',
              title: 'Project 1',
              picture: 'https://example.com/picture.png',
              dateCreated: '2014-01-01T08:15:39.736Z',
            },
            {
              id: 'pj2',
              title: 'Project 2',
              picture: 'https://example.com/picture.png',
              dateCreated: '2014-01-01T08:15:39.736Z',
            },
          ],
        };
      }
    },
  });
}

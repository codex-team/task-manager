import { CTProtoClient } from 'ctproto';
import { AuthorizeMessagePayload } from '../../../../types/transport/requests/authorize';
import { AuthorizeResponsePayload } from '../../../../types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from '../../../../types/transport';

const client = new CTProtoClient<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
  apiUrl: 'ws://localhost:3080/',
  authRequestPayload: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  },
  onAuth: (data) => {
    console.log('Authorization is success', data);
  },
  onMessage: (data) => {
    console.log('Incoming message: ', data);
  },
});

export default client;
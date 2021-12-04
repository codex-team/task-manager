import ReactDOM from 'react-dom';

import { CTProtoClient } from 'ctproto';
import { AuthorizeMessagePayload } from '../../types/transport/requests/authorize';
import { AuthorizeResponsePayload } from '../../types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from '../../types/transport';


import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


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

client
  .send('get-projects', {
    workspaceId: 'test-test-test',
  })
  .then((responsePayload) => {
    console.log('Response for "get-projects": ', responsePayload);
  });

client
  .send('create-project', {
    title: 'titleAgain',
  })
  .then((responsePayload) => {
    console.log('Response for "create-project": ', responsePayload);
  });

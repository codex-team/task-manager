import ReactDOM from 'react-dom';

import { CTProtoClient } from 'ctproto';
import { AuthorizeMessagePayload } from '../../types/transport/requests/authorize';
import { AuthorizeResponsePayload } from '../../types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from '../../types/transport';


import App from './App';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '.', '..', '.env') });


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


const client = new CTProtoClient<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
  apiUrl: process.env.REACT_APP_ENDPOINT_CTPROTO || 'ws://localhost:3080',
  authRequestPayload: {
    token: process.env.REACT_APP_ACCESS_TOKEN || '',
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

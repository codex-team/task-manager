import ReactDOM from 'react-dom';

import { CTProtoClient } from 'ctproto/src/client';
import { authorizeRequestPayloadMock } from 'ctproto/example/mocks/authorizeRequestPayload';
import { ApiRequest, ApiResponse, ApiUpdate } from 'ctproto/example/types';
import { AuthorizeMessagePayload } from 'ctproto/example/types/requests/authorize';
import { AuthorizeResponsePayload } from 'ctproto/example/types/responses/authorize';

import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


const client = new CTProtoClient<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
  apiUrl: 'ws://localhost:8080/',
  authRequestPayload: authorizeRequestPayloadMock,
  onAuth: (data) => {
    console.log('Authorization is success', data);
  },
  onMessage: (data) => {
    console.log('Incoming message: ', data);
  }
});

client
  .send('sum-of-numbers', {
    a: 10,
    b: 11,
  })
  .then((responsePayload) => {
    console.log('Response for "sum-of-numbers": ', responsePayload);
  });



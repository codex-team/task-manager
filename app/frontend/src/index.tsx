import ReactDOM from 'react-dom';

import { CTProtoClient } from 'ctproto';
import { AuthorizeMessagePayload } from '../../types/transport/requests/authorize';
import { AuthorizeResponsePayload } from '../../types/transport/responses/authorize';
import { ApiRequest, ApiResponse, ApiUpdate } from '../../types/transport';

import { Config } from './config';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


const client = new CTProtoClient<AuthorizeMessagePayload, AuthorizeResponsePayload, ApiRequest, ApiResponse, ApiUpdate>({
  apiUrl: Config.CTPROTO_ENDPOINT,
  authRequestPayload: {
    token: Config.CTPROTO_TOKEN,
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
  })
  .then((responsePayload) => {
    console.log('Response for "get-projects": ', responsePayload);
  });

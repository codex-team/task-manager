import { CTProtoClient } from 'ctproto/src/client';

const client = new CTProtoClient({
  apiUrl: 'ws://localhost:8080/api',
  authRequestPayload: {
    token: 'asd',
  },
  onAuth: (data) => {
    if (!data.success) {
      throw new Error(`${data.error}`);
    }

    console.log('Authorization is success', data.success);
  },
  onMessage: (data) => {
    console.log('Incoming message: ', data);
  }
});

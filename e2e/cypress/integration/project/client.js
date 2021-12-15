import { CTProtoClient } from 'ctproto';

const client = new CTProtoClient({
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

describe('Creating client', function () {
  it('building ctproto client', async function () {
    cy.stub(client, 'send')

    await client
      .send('create-project', {
        title: 'titleAgain',
      })
      .then((responsePayload) => {
        console.log('Response for "create-project": ', responsePayload);
      });

    expect(client.send).to.be.called
  });
});

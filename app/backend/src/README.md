# Backend structure

Entry file [index.ts](./index.ts) used to create a server to serve static files
and starts the CTPtoto sockets server as API.

## API

Messages which sent to CTProto server will be processed by [messageDispatcher.ts](./ui/transport-server/messageDispatcher.ts).

Handler processor function will be chosen by message's `type`.

### Message Handlers

All handlers placed in [ui/transport-server/handlers](./ui/transport-server/handlers) directory.

# Transport Server

[Ctproto](github.com/codex-team/ctproto) used as an enpoint to communicate with clients.

[Message Dispatcher](./messageDispatcher.ts) finds the right handler function for any message by it's type.

Message Dispatcher has a map of message types and their handlers.

Each handler should implement [messageHandler](./handlers/messageHandler.ts) interface
with the following required fields:

- `type` — type of messages to be processed by this handler;
- `handle(payload)` — processor function which gets the payload from the message.

Handler classes are stored in the `handlers` directory as messageHandler interface.

export interface MessageHandler {
  type: string;
  handle(payload);
}

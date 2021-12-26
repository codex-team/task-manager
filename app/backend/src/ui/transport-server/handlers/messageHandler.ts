import { ApiResponse } from '../../../../../types/transport';

export interface MessageHandler {
  type: string;
  handle(payload): Promise<ApiResponse['payload'] | void>;
}

import { ApiMessagePayload, ApiResponse } from '../../../../../types/transport';

export interface MessageHandler {
  type: string;
  handle(payload: ApiMessagePayload): Promise<ApiResponse['payload'] | void>;
}

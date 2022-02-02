import { ApiMessagePayload, ApiResponse } from '../../../../../types/transport';

export interface MessageHandler {
  /**
   * Handler's type
   */
  type: string;

  /**
   * Message processing function
   *
   * @param payload - message's payload
   */
  handle(payload: ApiMessagePayload): Promise<ApiResponse['payload'] | void>;
}

import { ApiRequest, ApiResponse } from 'types/transport';

/**
 * Interface for message handlers
 */
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
  handle(payload: ApiRequest['payload']): Promise<ApiResponse['payload'] | void>;
}

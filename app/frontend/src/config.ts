/**
 * Declare window.config param
 */
declare global {
  interface Window {
    config: {
      SERVER_ENDPOINT: string,
      CTPROTO_ENDPOINT: string,
      CTPROTO_TOKEN: string
    };
  }
}

/**
 * Get env object
 */
const env = window.config || {};

/**
 * Config class
 *
 * By default there are values for
 */
export class Config {
    /**
     * SITE OPTIONS
     */
    // Site name to be used for full links to backend
    public static SERVER_ENDPOINT: string = env.SERVER_ENDPOINT || '';

    /**
     * CTPROTO OPTIONS
     */
    // Define endpoint for api requests
    public static CTPROTO_ENDPOINT: string = env.CTPROTO_ENDPOINT || '';
    // Auth token for ctproto
    public static CTPROTO_TOKEN: string = env.CTPROTO_TOKEN || '';
}

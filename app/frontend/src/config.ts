/**
 * Declare window.config param
 */
declare global {
  interface Window {
    config: Record<string, string>;
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
    public static SERVER_ENDPOINT: string = env.SERVER_ENDPOINT || 'http://localhost:3000';

    /**
     * CTPROTO OPTIONS
     */
    // Define endpoint for api requests
    public static CTPROTO_ENDPOINT: string = env.CTPROTO_ENDPOINT || 'ws://localhost:3080';
    // Auth token for ctproto
    public static CTPROTO_TOKEN: string = env.CTPROTO_TOKEN || '';
}

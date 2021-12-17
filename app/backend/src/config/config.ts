import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

/**
 * Config class
 *
 * By default there are empty values because some values might be empty
 */
export class Config {
    /**
     * DATABASE CONNECTION
     */
    public static DB_URL: string = process.env.DB_URL || '';

    /**
     * SITE OPTIONS
     */
    public static SERVER_ENDPOINT: string = process.env.SERVER_ENDPOINT || '';
    public static SERVER_PORT: string = process.env.SERVER_PORT || '';

    /**
     * CTPROTO OPTIONS
     */
    public static CTPROTO_SERVER_PORT: string = process.env.CTPROTO_SERVER_PORT || '';
    public static CTPROTO_ENDPOINT: string = process.env.CTPROTO_ENDPOINT || '';
    public static CTPROTO_TOKEN: string = process.env.CTPROTO_TOKEN || '';
}

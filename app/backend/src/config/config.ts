import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

/**
 * Config class
 */
export class Config {
    /**
     * Database URL
     */
    public static dbUrl: string = process.env.DB_URL || 'mongodb://mongo:27017/task-manager';

    /**
     * Server host and port
     */
    public static host: string = process.env.HOST || 'localhost';
    public static port: string = process.env.PORT || '3000';

    /**
     * Ctproto host and port
     */
    public static ctprotoHost: string = process.env.CTPROTO_HOST || 'localhost';
    public static ctprotoPort: string = process.env.CTPROTO_PORT || '3080';
    public static ctprotoToken: string = process.env.CTPROTO_TOKEN || '';
}

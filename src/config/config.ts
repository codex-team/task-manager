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
}

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

/**
 * Config class
 */
export class Config {
  /**
   * Personal token
   */
  public static token: string = process.env.token || '?';
}

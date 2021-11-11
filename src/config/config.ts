import * as dotenv from "dotenv"

dotenv.config()

export class Config {
    /**
     * Database URL
     */
    public static dbUrl: string = process.env.DB_URL || '';
}

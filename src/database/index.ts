import * as mongoose from "mongoose";
import {Config} from "../config/config";

mongoose.connect(Config.dbUrl, {})
    .then(() => {
        console.log('️[DB]: DB is running');
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

export default mongoose;
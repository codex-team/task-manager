import * as mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/task-manager", {})
    .then(() => {
        console.log('️[DB]: DB is running');
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

export default mongoose;
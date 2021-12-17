import mongoose from 'mongoose';
import { Config } from '../config/config';

mongoose.connect(Config.DB_URL, {})
  .then(() => {
    console.log('️[DB]: DB is running');
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose;

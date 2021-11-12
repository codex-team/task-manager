import mongoose from '../index';
import { Status } from '../interfaces/interfaces';

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema = new mongoose.Schema ({
  /**
   * Status name
   */
  name: {
    type: String,
  },
});

export default mongoose.model<Status>('Status', StatusSchema);
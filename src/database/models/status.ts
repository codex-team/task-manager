import mongoose from '../index';
import { StatusDocument, StatusModel } from '../interfaces/status';

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema<StatusDocument> = new mongoose.Schema ({
  /**
   * Status name
   */
  name: {
    type: mongoose.Schema.Types.String,
  },
});

export default mongoose.model<StatusDocument, StatusModel>('Status', StatusSchema);

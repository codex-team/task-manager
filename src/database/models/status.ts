import mongoose from '../index';
import { IStatusDocument, IStatusModel } from '../interfaces/status';

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema<IStatusDocument> = new mongoose.Schema({
  /**
   * Status name
   */
  name: {
    type: mongoose.Schema.Types.String,
  },
});

export default mongoose.model<IStatusDocument, IStatusModel>('Status', StatusSchema);

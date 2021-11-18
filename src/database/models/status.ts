import mongoose from '../index';
import { StatusDocument, StatusModel } from '../interfaces/status';

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema<StatusDocument> = new mongoose.Schema ({
  /**
   * Status name
   */
  label: {
    type: mongoose.Schema.Types.String,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
});

export default mongoose.model<StatusDocument, StatusModel>('Status', StatusSchema);

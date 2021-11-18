import mongoose from '../index';
import { StatusDocument, StatusModel } from '../interfaces/status';

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema<StatusDocument> = new mongoose.Schema ({
  /**
   * Status label
   */
  label: {
    type: mongoose.Schema.Types.String,
  },
  /**
   * Status's project id
   */
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  /**
   * Tasks with this status
   */
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }]
});

export default mongoose.model<StatusDocument, StatusModel>('Status', StatusSchema);

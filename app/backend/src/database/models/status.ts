import { Status } from '../../../../types/entities';
import mongoose from '../index';

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema<Status> = new mongoose.Schema ({
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
    ref: 'Project',
  },
  /**
   * Tasks with this status
   */
  tasks: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  } ],
});

export default mongoose.model<Status>('Status', StatusSchema);

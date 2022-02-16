import mongoose from '../index';
import { Status } from 'types/entities';

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema<Status> = new mongoose.Schema({
  /**
   * Status label
   */
  label: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Status's project id
   */
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProjectSchema',
    required: true,
  },
  /**
   * Tasks with this status
   */
  tasks: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  } ],
});

export default mongoose.model<Status>('Status', StatusSchema, 'statuses');

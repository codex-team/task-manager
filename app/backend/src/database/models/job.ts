import mongoose from '../index';
import { Job } from 'types/entities';

/**
 * Job schema
 */
const JobSchema: mongoose.Schema<Job> = new mongoose.Schema({
  /**
   * Job's type
   */
  type: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  /**
   * Job's schedule
   */
  schedule: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  /**
   * Job's payload
   */
  payload: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

export default mongoose.model<Job>('Job', JobSchema);

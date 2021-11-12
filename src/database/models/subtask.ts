import mongoose from '../index';
import { Subtask } from '../interfaces/interfaces';

/**
 * Subtask schema
 */
const SubtaskSchema: mongoose.Schema = new mongoose.Schema ({
  /**
   *  Task id
   */
  parenId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  },
  /**
   * Subtask name
   */
  name: {
    type: String,
    required: true,
  },
  /**
   * Subtask description
   */
  description: {
    type: String,
  },
  /**
   * Subtask executor, user's id
   */
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  /**
   * Subtask status, status's id
   */
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status',
  },
});

export default mongoose.model<Subtask>('Subtask', SubtaskSchema);
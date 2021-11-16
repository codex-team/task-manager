import mongoose from '../index';
import { ISubtaskDocument, ISubtaskModel } from '../interfaces/subtask';

/**
 * Subtask schema
 */
const SubtaskSchema: mongoose.Schema<ISubtaskDocument> = new mongoose.Schema({
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
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Subtask description
   */
  description: {
    type: mongoose.Schema.Types.String,
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

export default mongoose.model<ISubtaskDocument, ISubtaskModel>('Subtask', SubtaskSchema);

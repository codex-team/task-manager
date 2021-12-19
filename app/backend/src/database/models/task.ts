import mongoose from '../index';
import Task from '../../../../types/entities/task';

/**
 * Task schema
 */
const TaskSchema: mongoose.Schema<Task> = new mongoose.Schema ({
  /**
   * Task title
   */
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  /**
   * Task's project id
   */
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ProjectSchema',
  },

  /**
   * Subtask's parent id
   */
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskSchema',
  },

  /**
   * Task description
   */
  description: {
    type: mongoose.Schema.Types.String,
  },

  /**
   * Task assignees, list of teammates' id
   */
  assignees: [ {
    type: mongoose.Schema.Types.ObjectId,
  } ],

  /**
   * Task creation date
   */
  dateCreated: {
    type: mongoose.Schema.Types.String,
    default: Date(),
  },
});

export default mongoose.model<Task>('Task', TaskSchema);

import mongoose from '../index';
import Task from '../../../../types/entities/task';

/**
 * Task schema
 */
const TaskSchema: mongoose.Schema<Task> = new mongoose.Schema({
  /**
   * Task of body
   */
  text: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  /**
   * Order of the task when displayed in list of project tasks
   */
  orderScore: {
    type: mongoose.Schema.Types.Number,
  },

  /**
   * Task's project id
   */
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
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
    default: new Date().toString(),
  },
});

export default mongoose.model<Task>('Task', TaskSchema);

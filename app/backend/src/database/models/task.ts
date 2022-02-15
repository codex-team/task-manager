import mongoose from '../index';
import { Task } from 'types/entities';

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
    required: true,
  },

  /**
   * Task status id
   */
  statusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StatusSchema',
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
    ref: 'TeammateSchema',
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

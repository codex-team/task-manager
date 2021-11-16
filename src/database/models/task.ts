import mongoose from '../index';
import { ITaskDocument, ITaskModel } from '../interfaces/task';

/**
 * Task schema
 */
const TaskSchema: mongoose.Schema<ITaskDocument> = new mongoose.Schema({
  /**
   * Task's project id
   */
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  /**
   * Task name
   */
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Task description
   */
  description: {
    type: String,
  },
  /**
   * Task executors, list of users' id
   */
  assignees: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  } ],
  /**
   * Task status, task's id
   */
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  },
});

export default mongoose.model<ITaskDocument, ITaskModel>('Task', TaskSchema);

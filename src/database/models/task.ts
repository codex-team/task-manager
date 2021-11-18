import mongoose from '../index';
import { TaskDocument, TaskModel } from '../interfaces/task';

/**
 * Task schema
 */
const TaskSchema: mongoose.Schema<TaskDocument> = new mongoose.Schema ({
  /**
   * task's project id
   */
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  /**
   * subtask's parent id, task id
   */
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  },
  /**
   * Task title
   */
  title: {
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
   * Task assignees, list of teammates' id
   */
  assignees: [ {
    type: mongoose.Schema.Types.ObjectId,
  } ],
  /**
   * Task creation date
   */
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<TaskDocument, TaskModel>('Task', TaskSchema);

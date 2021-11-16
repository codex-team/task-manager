import mongoose from '../index';
import { TaskDocument, TaskModel } from '../interfaces/task';

/**
 * Task schema
 */
const TaskSchema: mongoose.Schema<TaskDocument> = new mongoose.Schema ({
  /**
   * Task's parent id (Project or Task)
   */
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
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
    ref: 'Status',
  },
});

export default mongoose.model<TaskDocument, TaskModel>('Task', TaskSchema);

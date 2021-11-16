import mongoose from '../index';

/**
 * Interface for task
 */
interface ITask {
  /**
   * Task's project id
   */
  projectId: mongoose.Schema.Types.ObjectId,
  /**
   * Task name
   */
  name: string,
  /**
   * Task description
   */
  description: string,
  /**
   * Task executors, list of users' id
   */
  assignees: Array<mongoose.Schema.Types.ObjectId>,
  /**
   * Task status, status's id
   */
  status: mongoose.Schema.Types.ObjectId,
}

/**
 * Interface for task document
 */
export interface ITaskDocument extends ITask, mongoose.Document {
}

/**
 * Interface for task model
 */
export interface ITaskModel extends mongoose.Model<ITaskDocument> {
}

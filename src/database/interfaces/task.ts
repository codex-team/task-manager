import mongoose from '../index';

/**
 * Interface for task
 */
interface Task{
  /**
   * Task's project id
   */
  parentId: mongoose.Schema.Types.ObjectId,
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
export interface TaskDocument extends Task, mongoose.Document{
}

/**
 * Interface for task model
 */
export interface TaskModel extends mongoose.Model<TaskDocument>{
}

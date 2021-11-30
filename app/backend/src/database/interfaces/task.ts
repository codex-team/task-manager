import mongoose from '../index';

/**
 * Interface for task
 */
interface Task{
  /**
   * task's project id
   */
  projectId: mongoose.Schema.Types.ObjectId,
  /**
   * subtask's parent id, task id
   */
  parentId: mongoose.Schema.Types.ObjectId,
  /**
   * Task title
   */
  title: string,
  /**
   * Task description
   */
  description: string,
  /**
   * Task assignees, list of teammates' id
   */
  assignees: Array<mongoose.Schema.Types.ObjectId>,
  /**
   * Task creation date
   */
  dateCreated: Date,
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

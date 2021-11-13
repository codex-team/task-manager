import mongoose from '../index';

/**
 * Interface for subtask
 */
interface ISubtask{
  /**
   * Id of task
   */
  parentId: mongoose.Schema.Types.ObjectId,
  /**
   * Subtask name
   */
  name: string,
  /**
   * Subtask description
   */
  description: string,
  /**
   * Subtask executor, user's id
   */
  assignee: mongoose.Schema.Types.ObjectId,
  /**
   * Subtask status, status's id
   */
  status: mongoose.Schema.Types.ObjectId,
}

/**
 * Interface for subtask document
 */
export interface ISubtaskDocument extends ISubtask, mongoose.Document{
}

/**
 * Interface for subtask model
 */
export interface ISubtaskModel extends mongoose.Model<ISubtaskDocument>{
}

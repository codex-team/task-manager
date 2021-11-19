import mongoose from '../index';

/**
 * Interface for task's status. Completion degree of the task.
 */
interface Status{
  /**
   * Status's project id
   */
  projectId: mongoose.Schema.Types.ObjectId,
  /**
   * Status label
   */
  label: string,
  /**
   * Tasks with this status
   */
  tasks: Array<mongoose.Schema.Types.ObjectId>
}

/**
 * Interface for status document
 */
export interface StatusDocument extends Status, mongoose.Document{
}

/**
 * Interface for status model
 */
export interface StatusModel extends mongoose.Model<StatusDocument>{
}

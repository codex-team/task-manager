import mongoose from '../index';

/**
 * Interface for task's status. Completion degree of the task.
 */
interface Status{
  /**
   * Status name
   */
  projectId: mongoose.Schema.Types.ObjectId,
  label: string,
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

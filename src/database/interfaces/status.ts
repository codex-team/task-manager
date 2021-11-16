import mongoose from '../index';

/**
 * Interface for task's status
 */
interface Status {
  /**
   * Status name
   */
  name: string,
}

/**
 * Interface for status document
 */
export interface StatusDocument extends Status, mongoose.Document {
}

/**
 * Interface for status model
 */
export interface StatusModel extends mongoose.Model<StatusDocument> {
}

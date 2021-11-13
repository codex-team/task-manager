import mongoose from '../index';

/**
 * Interface for status
 */
interface IStatus{
  /**
   * Status name
   */
  name: string,
}

/**
 * Interface for status document
 */
export interface IStatusDocument extends IStatus, mongoose.Document{
}

/**
 * Interface for status model
 */
export interface IStatusModel extends mongoose.Model<IStatusDocument>{
}

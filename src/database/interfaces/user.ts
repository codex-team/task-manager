import mongoose from '../index';

/**
 * Interface for user
 */
interface User {
  /**
   * User name
   */
  name: string,
  /**
   * User role, role's id
   */
  roleId: mongoose.Schema.Types.ObjectId
}

/**
 * Interface for user document
 */
export interface UserDocument extends User, mongoose.Document {
}

/**
 * Interface for user model
 */
export interface UserModel extends mongoose.Model<UserDocument> {
}

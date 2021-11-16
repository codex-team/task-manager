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
  roleId: number,
}

/**
 * Interface for user document
 */
export interface UserDocument extends User, mongoose.Document {
  setName: (name: string) => Promise<void>
  getName: () => Promise<string>

  setRoleId: (roleId: number) => Promise<void>
  getRoleId: () => Promise<number>

  getUserId: () => Promise<mongoose.Types.ObjectId>
}

/**
 * Interface for user model
 */
export interface UserModel extends mongoose.Model<UserDocument> {
}

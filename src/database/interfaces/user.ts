import mongoose from "../index";

/**
 * Interface for user
 */
interface IUser{
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
export interface IUserDocument extends IUser, mongoose.Document{
}

/**
 * Interface for user model
 */
export interface IUserModel extends mongoose.Model<IUserDocument>{
}

import mongoose from '../index';

/**
 * Interface for role
 */
interface IRole{
  /**
   * Role name
   */
  name: string,
}

/**
 * Interface for role document
 */
export interface IRoleDocument extends IRole, mongoose.Document{
}

/**
 * Interface for Role model
 */
export interface IRoleModel extends mongoose.Model<IRoleDocument>{
}

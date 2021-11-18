import mongoose from '../index';

/**
 * Interface for user's role. Role is the type of user, and type of view for him.
 */
interface Role {
  /**
   * Role name
   */
  name: string,
}

/**
 * Interface for role document
 */
export interface RoleDocument extends Role, mongoose.Document {
}

/**
 * Interface for Role model
 */
export interface RoleModel extends mongoose.Model<RoleDocument> {
}

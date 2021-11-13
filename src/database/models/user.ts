import mongoose from '../index';
import { IUserDocument, IUserModel } from '../interfaces/user';

/**
 * User schema
 */
const UserSchema: mongoose.Schema<IUserDocument> = new mongoose.Schema ({
  /**
   * User name
   */
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * User role, role's id
   */
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
  },
});

export default mongoose.model<IUserDocument, IUserModel>('User', UserSchema);



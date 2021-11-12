import mongoose from '../index';
import { User } from '../interfaces/interfaces';

/**
 * User schema
 */
const UserSchema: mongoose.Schema = new mongoose.Schema ({
  /**
   * User name
   */
  name: {
    type: String,
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

export default mongoose.model<User>('User', UserSchema);



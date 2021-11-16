import mongoose from '../index';
import { IRoleDocument, IRoleModel } from '../interfaces/role';

/**
 * Role schema
 */
const RoleSchema: mongoose.Schema<IRoleDocument> = new mongoose.Schema({
  /**
   * Role name
   */
  name: {
    type: mongoose.Schema.Types.String,
  },
});

export default mongoose.model<IRoleDocument, IRoleModel>('Role', RoleSchema);

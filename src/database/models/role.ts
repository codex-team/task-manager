import mongoose from '../index';
import { RoleDocument, RoleModel } from '../interfaces/role';

/**
 * Role schema
 */
const RoleSchema: mongoose.Schema<RoleDocument> = new mongoose.Schema ({
  /**
   * Role name
   */
  name: {
    type: mongoose.Schema.Types.String,
  },
});

export default mongoose.model<RoleDocument, RoleModel>('Role', RoleSchema);

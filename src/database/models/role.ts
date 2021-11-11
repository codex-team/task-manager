import mongoose from "../index";
import {Role} from "../interfaces/interfaces";

/**
 * Role schema
 */
const RoleSchema: mongoose.Schema = new mongoose.Schema ({
    /**
     * Role name
     */
    name:{
        type: String
    }
})

export default mongoose.model<Role>('Role', RoleSchema)
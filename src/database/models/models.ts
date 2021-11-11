import mongoose from "../index";
import { User, Task, Subtask, Role, Status, Project} from "../interfaces/interfaces"

/**
 * User schema
 */
const UserSchema: mongoose.Schema = new mongoose.Schema ({
    /**
     * User name
     */
    name: {
        type: String,
        required: true
    },
    /**
     * User role, role's id
     */
    roleId: {
        type: mongoose.Schema.Types.ObjectId
    }
})

/**
 * Task schema
 */
const TaskSchema: mongoose.Schema = new mongoose.Schema ({
    /**
     * Task name
     */
    name: {
        type: String,
        required: true,
    },
    /**
     * Task description
     */
    description: {
        type: String,
    },
    /**
     * Task executors, list of users' id
     */
    executors: {
        type: Array(mongoose.Schema.Types.ObjectId),
    },
    /**
     * Task status, task's id
     */
    status: {
        type: mongoose.Schema.Types.ObjectId,
    },
    /**
     * Task subtasks, list of subtasks' id
     */
    subTasks: {
        type: Array(mongoose.Schema.Types.ObjectId)
    }
})

/**
 * Status schema
 */
const StatusSchema: mongoose.Schema = new mongoose.Schema ({
    /**
     * Status name
     */
    name: {
        type: String
    }
})

/**
 * Subtask schema
 */
const SubtaskSchema: mongoose.Schema = new mongoose.Schema ({
    /**
     * Subtask name
     */
    name: {
        type: String,
        required: true,
    },
    /**
     * Subtask description
     */
    description: {
        type: String,
    },
    /**
     * Subtask executor, user's id
     */
    executor: {
        type: mongoose.Schema.Types.ObjectId,
    },
    /**
     * Subtask status, status's id
     */
    status: {
        type: mongoose.Schema.Types.ObjectId,
    },
})

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

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema = new mongoose.Schema ({
    /**
     * Project name
     */
    name:{
        type: String,
        required: true,
    }
})

export const userModel = mongoose.model<User>('User', UserSchema)
export const taskModel = mongoose.model<Task>('Task', TaskSchema)
export const statusModel = mongoose.model<Status>('Status', StatusSchema)
export const subtaskModel = mongoose.model<Subtask>('Subtask', SubtaskSchema)
export const roleModel = mongoose.model<Role>('Role', RoleSchema)
export const projectModel = mongoose.model<Project>('Project', ProjectSchema)


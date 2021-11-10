import mongoose from "..";
import { User, Task, Subtask, Role, Status, Project} from "../interfaces/interfaces"

const UserSchema: mongoose.Schema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const TaskSchema: mongoose.Schema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    executors: {
        type: Array(mongoose.Schema.Types.ObjectId),
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
    },
    subtasks: {
        type: Array(mongoose.Schema.Types.ObjectId)
    }
})

const StatusSchema: mongoose.Schema = new mongoose.Schema ({
    name: {
        type: String
    }
})

const SubtaskSchema: mongoose.Schema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    executor: {
        type: mongoose.Schema.Types.ObjectId,
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
    },
})

const RoleSchema: mongoose.Schema = new mongoose.Schema ({
    name:{
        type: String
    }
})

const ProjectSchema: mongoose.Schema = new mongoose.Schema ({
    name:{
        type: String,
        required: true,
    }
})

export const UserModel = mongoose.model<User>('User', UserSchema)
export const TaskModel = mongoose.model<Task>('Task', TaskSchema)
export const StatusModel = mongoose.model<Status>('Status', StatusSchema)
export const SubtaskModel = mongoose.model<Subtask>('Subtask', SubtaskSchema)
export const RoleModel = mongoose.model<Role>('Role', RoleSchema)
export const ProjectModel = mongoose.model<Project>('Project', ProjectSchema)


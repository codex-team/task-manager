import mongoose from '../index';

export interface User extends mongoose.Document{
    name: String,
    role_id: mongoose.Schema.Types.ObjectId
}

export interface Task extends mongoose.Document{
    name: String,
    description: String,
    executors: Array<mongoose.Schema.Types.ObjectId>,
    status: mongoose.Schema.Types.ObjectId,
    subtasks: Array<mongoose.Schema.Types.ObjectId>
}

export interface Status extends mongoose.Document{
    name: String,
}

export interface Subtask extends mongoose.Document{
    name: String,
    description: String,
    executor: mongoose.Schema.Types.ObjectId,
    status: mongoose.Schema.Types.ObjectId,
}

export interface Role extends mongoose.Document{
    name: String,
}

export interface Project extends mongoose.Document{
    name: String,
    description: String,
    tasks: Array<mongoose.Schema.Types.ObjectId>,
}

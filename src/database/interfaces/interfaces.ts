import mongoose from '../index';

/**
 * Interface for user
 */
export interface User extends mongoose.Document{
    /**
     * User name
     */
    name: String,
    /**
     * User role, role's id
     */
    roleId: mongoose.Schema.Types.ObjectId
}

/**
 * Interface for task
 */
export interface Task extends mongoose.Document{
    /**
     * Task name
     */
    name: String,
    /**
     * Task description
     */
    description: String,
    /**
     * Task executors, list of users' id
     */
    executors: Array<mongoose.Schema.Types.ObjectId>,
    /**
     * Task status, status's id
     */
    status: mongoose.Schema.Types.ObjectId,
    /**
     * Task's subtasks, list of subtasks' id
     */
    subTasks: Array<mongoose.Schema.Types.ObjectId>
}

/**
 * Interface for status
 */
export interface Status extends mongoose.Document{
    /**
     * Status name
     */
    name: String,
}

/**
 * Interface for subtask
 */
export interface Subtask extends mongoose.Document{
    /**
     * Subtask name
     */
    name: String,
    /**
     * Subtask description
     */
    description: String,
    /**
     * Subtask executor, user's id
     */
    executor: mongoose.Schema.Types.ObjectId,
    /**
     * Subtask status, status's id
     */
    status: mongoose.Schema.Types.ObjectId,
}

/**
 * Interface for role
 */
export interface Role extends mongoose.Document{
    /**
     * Role name
     */
    name: String,
}

/**
 * Interface for project
 */
export interface Project extends mongoose.Document{
    /**
     * Project name
     */
    name: String,
    /**
     * Project description
     */
    description: String,
    /**
     * Project tasks, list of tasks' id
     */
    tasks: Array<mongoose.Schema.Types.ObjectId>,
}

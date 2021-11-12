import mongoose from '../index';

/**
 * Interface for user
 */
export interface User extends mongoose.Document{
    /**
     * User name
     */
    name: string,
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
     * Task's project id
     */
    projectId: mongoose.Schema.Types.ObjectId,
    /**
     * Task name
     */
    name: string,
    /**
     * Task description
     */
    description: string,
    /**
     * Task executors, list of users' id
     */
    assignees: Array<mongoose.Schema.Types.ObjectId>,
    /**
     * Task status, status's id
     */
    status: mongoose.Schema.Types.ObjectId,
}

/**
 * Interface for status
 */
export interface Status extends mongoose.Document{
    /**
     * Status name
     */
    name: string,
}

/**
 * Interface for subtask
 */
export interface Subtask extends mongoose.Document{
    /**
     * Id of task
     */
    parentId: mongoose.Schema.Types.ObjectId,
    /**
     * Subtask name
     */
    name: string,
    /**
     * Subtask description
     */
    description: string,
    /**
     * Subtask executor, user's id
     */
    assignee: mongoose.Schema.Types.ObjectId,
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
    name: string,
}

/**
 * Interface for project
 */
export interface Project extends mongoose.Document{
    /**
     * Project name
     */
    name: string,
    /**
     * Project description
     */
    description: string,
}

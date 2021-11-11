import mongoose from "../index";
import {Task} from "../interfaces/interfaces";

/**
 * Task schema
 */
const TaskSchema: mongoose.Schema = new mongoose.Schema ({
    /**
     * Task's project id
     */
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    },
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
    assignees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    /**
     * Task status, task's id
     */
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    },
})

export default mongoose.model<Task>('Task', TaskSchema)
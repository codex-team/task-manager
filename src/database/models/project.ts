import mongoose from "../index";
import {Project} from "../interfaces/interfaces";

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
    },
    /**
     * Project description
     */
    description: {
        type: String
    }
})

export default mongoose.model<Project>('Project', ProjectSchema)
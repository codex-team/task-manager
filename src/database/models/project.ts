import mongoose from '../index';
import { ProjectDocument, ProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<ProjectDocument> = new mongoose.Schema ({
  /**
   * Project name
   */
  name:{
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Project description
   */
  description: {
    type: mongoose.Schema.Types.String,
  },
});


export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

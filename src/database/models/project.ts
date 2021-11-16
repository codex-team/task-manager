import mongoose from '../index';
import { ProjectDocument, ProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<ProjectDocument> = new mongoose.Schema ({
  /**
   * Project title
   */
  title:{
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Project description
   */
  description: {
    type: mongoose.Schema.Types.String,
  },

  dateCreated: {
    type: Date,
    default: Date.now
  }
});


export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

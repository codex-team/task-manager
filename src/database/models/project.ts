import mongoose from '../index';
import { IProjectDocument, IProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<IProjectDocument> = new mongoose.Schema ({
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


export default mongoose.model<IProjectDocument, IProjectModel>('Project', ProjectSchema);

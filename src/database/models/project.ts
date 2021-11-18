import mongoose from '../index';
import { ProjectDocument, ProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<ProjectDocument> = new mongoose.Schema ({
  /**
   * Project title
   */
  name:{
    type: mongoose.Schema.Types.String,
    required: true,
  },
  messengerChannelUrl: {
    type: mongoose.Schema.Types.String
  },
  picture: {
    type: mongoose.Schema.Types.String
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

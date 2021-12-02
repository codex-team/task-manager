import mongoose from '../index';
import { ProjectDocument, ProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<ProjectDocument> = new mongoose.Schema ({
  /**
   * Project name
   */
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Url for notions
   */
  messengerChannelUrl: {
    type: mongoose.Schema.Types.String,
  },
  /**
   * Project picture
   */
  picture: {
    type: mongoose.Schema.Types.String,
  },
  /**
   * Project creation date
   */
  dateCreated: {
    type: mongoose.Schema.Types.Date,
    default: new Date(),
  },
});


export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

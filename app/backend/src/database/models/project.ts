import mongoose from '../index';
import { ProjectDocument, ProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<ProjectDocument> = new mongoose.Schema({
  /**
   * Project name
   */
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
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
  /**
   * Url for notions
   */
  messengerChannelUrl: {
    type: mongoose.Schema.Types.String,
  },
});

export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

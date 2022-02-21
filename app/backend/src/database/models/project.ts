import mongoose from '../index';
import { Project } from 'types/entities';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<Project> = new mongoose.Schema({
  /**
   * Project's workspace id
   */
  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkspaceSchema',
    required: true,
  },
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
    type: mongoose.Schema.Types.String,
    default: new Date().toString(),
  },
  /**
   * Url for notions
   */
  messengerChannelUrl: {
    type: mongoose.Schema.Types.String,
  },
});

export default mongoose.model<Project>('Project', ProjectSchema);

import mongoose from '../index';
import { Workspace } from 'types/entities';

/**
 * Workspace schema
 */
const WorkspaceSchema: mongoose.Schema<Workspace> = new mongoose.Schema ({
  /**
   * Workspace name
   */
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  /**
   * List of projects in workspace
   */
  projects: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  } ],

  /**
   * List of teammates in workspace
   */
  teammates: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teammate',
  } ],
});

export default mongoose.model<Workspace>('Workspace', WorkspaceSchema);

import mongoose from "../index"
import {WorkspaceDocument, WorkspaceModel} from "../interfaces/workspace";

/**
 * Workspace schema
 */
const WorkspaceSchema: mongoose.Schema<WorkspaceDocument> = new mongoose.Schema ({
  /**
   * Workspace name
   */
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * List of teammates in workspace
   */
  team: [ {
    /**
     * Teammate id
     */
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: new mongoose.Types.ObjectId()
    },
    /**
     * Teammate name
     */
    name: {
      type: mongoose.Schema.Types.String,
    },
    /**
     * List of teammate's contacts
     */
    contacts: [ {
      /**
       * Contact type
       */
      type: {
        type: mongoose.Schema.Types.String
      },
      /**
       * Contact username
       */
      userName: {
        type: mongoose.Schema.Types.String
      }
    } ],
  } ],
  /**
   * List of projects in workspace
   */
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
})

export default mongoose.model<WorkspaceDocument, WorkspaceModel>('Workspace', WorkspaceSchema);

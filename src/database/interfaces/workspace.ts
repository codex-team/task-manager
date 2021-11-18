import {Teammate} from "./teammate";
import mongoose from '../index';

/**
 * Interface for Workspace
 */
interface Workspace {
  /**
   * Workspace name
   */
  name: String,
  /**
   * List of teammates in workspace
   */
  team: Array<Teammate>
  /**
   * List of projects in workspace
   */
  projects: Array<mongoose.Types.ObjectId>
}

export interface WorkspaceDocument extends Workspace, mongoose.Document {
}

export interface WorkspaceModel extends mongoose.Model<WorkspaceDocument> {
}


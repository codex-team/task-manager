import {Teammate} from "./teammate";
import mongoose from '../index';

interface Workspace {
  name: String,
  team: Array<Teammate>
  projects: Array<mongoose.Types.ObjectId>
}

export interface WorkspaceDocument extends Workspace, mongoose.Document {
}

export interface WorkspaceModel extends mongoose.Model<WorkspaceDocument> {
}


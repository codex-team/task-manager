import mongoose from "../index"
import {WorkspaceDocument, WorkspaceModel} from "../interfaces/workspace";

const WorkspaceSchema: mongoose.Schema<WorkspaceDocument> = new mongoose.Schema ({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  team: [ {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: new mongoose.Types.ObjectId()
    },
    name: {
      type: mongoose.Schema.Types.String,
    },
    contacts: [ {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
      },
      type: {
        type: mongoose.Schema.Types.String
      },
      userName: {
        type: mongoose.Schema.Types.String
      }
    } ],
  } ],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
})

export default mongoose.model<WorkspaceDocument, WorkspaceModel>('Workspace', WorkspaceSchema);

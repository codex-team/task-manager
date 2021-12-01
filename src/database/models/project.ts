import mongoose from '../index';
import { ProjectDocument, ProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<ProjectDocument> = new mongoose.Schema({
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

ProjectSchema.statics.findById = async function (id) {
  return await this.findOne({ _id: id }).exec();
};

/**
 * Get project id
 *
 * @returns {mongoose.Types.ObjectId}
 */
ProjectSchema.methods.getId = function () {
  return this._id;
};

/**
 * Update project name
 *
 * @param {string} name - name for update
 * @returns {Promise<void>}
 */
ProjectSchema.methods.updateName = async function (name) {
  this.name = name;

  return this.save();
};

export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

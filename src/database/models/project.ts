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
   * Project description
   */
  description: {
    type: mongoose.Schema.Types.String,
  },
});

/**
 * Find project document by name
 *
 * @param {string} name - project name for searching
 * @returns {Promise<IProjectDocument>}
 */
ProjectSchema.statics.findByName = async function (name) {
  return await this.findOne({ name: name }).exec();
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

/**
 * Update project description
 *
 * @param {string} description - description for update
 * @returns {Promise<void>}
 */
ProjectSchema.methods.updateDescription = async function (description) {
  this.description = description;

  return this.save();
};

export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

import mongoose from '../index';
import { ProjectDocument, ProjectModel } from '../interfaces/project';

/**
 * Project schema
 */
const ProjectSchema: mongoose.Schema<ProjectDocument> = new mongoose.Schema ({
  /**
   * Project title
   */
  title:{
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Project description
   */
  description: {
    type: mongoose.Schema.Types.String,
  },

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Find project document by name
 *
 * @param {string} name - project name for searching
 * @returns {Promise<ProjectDocument>}
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
  this.title = name;

  return await this.save();
};

/**
 * Update project description
 *
 * @param {string} description - description for update
 * @returns {Promise<void>}
 */
ProjectSchema.methods.updateDescription = async function (description) {
  this.description = description;

  return await this.save();
};

export default mongoose.model<ProjectDocument, ProjectModel>('Project', ProjectSchema);

import mongoose from '../index';

/**
 * Interface for project
 */
interface Project {
  /**
   * Project name
   */
  name: string,
  /**
   * Project description
   */
  description: string,
}

/**
 * Interface for project document
 */
export interface ProjectDocument extends Project, mongoose.Document {
  /**
   * Get id of project document
   */
  getId: () => Promise<mongoose.Types.ObjectId>
  /**
   * Update name of project document
   */
  updateName: (name: string) => Promise<void>
  /**
   * Update description of project document
   */
  updateDescription: (description: string) => Promise<void>
}

/**
 * Interface for project model
 */
export interface ProjectModel extends mongoose.Model<ProjectDocument> {
  /**
   * Find project document by name
   */
  findByName: (name: string) => Promise<ProjectDocument>
}

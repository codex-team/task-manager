import mongoose from "../index";

/**
 * Interface for project
 */
interface IProject{
  /**
   * Project name
   */
  name: String,
  /**
   * Project description
   */
  description: String,
}

/**
 * Interface for project document
 */
export interface IProjectDocument extends IProject, mongoose.Document{
}

/**
 * Interface for project model
 */
export interface IProjectModel extends mongoose.Model<IProjectDocument>{
}

import mongoose from '../index';

/**
 * Interface for project
 */
interface Project{
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
export interface ProjectDocument extends Project, mongoose.Document{
}

/**
 * Interface for project model
 */
export interface ProjectModel extends mongoose.Model<ProjectDocument>{
}

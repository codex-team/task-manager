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
   * Url for notions
   */
  messengerChannelUrl: string,
  /**
   * Project picture
   */
  picture: string,
  /**
   * Project creation date
   */
  dateCreated: Date,
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

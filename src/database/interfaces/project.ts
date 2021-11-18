import mongoose from '../index';

/**
 * Interface for project
 */
interface Project{
  /**
   * Project title
   */
  name: String,
  /**
   * Project creation date
   */
  messengerChannelUrl: String,
  picture: String,
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

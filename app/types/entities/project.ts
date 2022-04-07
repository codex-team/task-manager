import { Status } from '.';

/**
 * This interface represents the Project entity
 */
export default interface Project {
  /**
   * Project's unique identity
   */
  _id: string;

  /**
   * Project's visible title
   */
  title: string;

  /**
   * Project's visible picture
   */
  picture?: string;

  /**
   * Project's creation date (stored in the format: 'Day of the week Month Date Year HH:MM:SS GMT...)  '
   * (ex. Tue Dec 21 2021 18:09:02 GMT+0000 (Coordinated Universal Time))
   */
  dateCreated?: string;

  /**
   * URL of a Channel in a messenger in where reports and notifies will be sent
   */
  messengerChannelUrl?: string;

  /**
   * List of available statuses that task within this project can have
   */
  taskStatuses?: Status[]
}

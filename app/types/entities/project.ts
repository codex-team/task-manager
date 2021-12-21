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
   * Project's creation date
   */
  dateCreated: string;

  /**
   * URL of a Channel in a messenger in where reports and notifies will be sent
   */
  messengerChannelUrl?: string;
}

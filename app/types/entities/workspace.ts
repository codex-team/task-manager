/**
 * This interface represents the Workspace entity
 */
export default interface Workspace {
  /**
   * Workspace's unique identity
   */
  _id: string;

  /**
   * Workspace's visible title
   */
  name: string;

  /**
   * List of teammates
   */
  teammates: string[];

  /**
   * List of projects in workspace
   */
  projects: string[];
}


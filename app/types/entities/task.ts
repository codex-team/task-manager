/**
 * This interface represents the Task entity
 */
export default interface Task {
  /**
   * Task's unique identity
   */
  id: string;

  /**
   * Task's project id
   */
  projectId: string;

  /**
   * Task's parent id
   */
  parentId: string;

  /**
   * Task's visible title
   */
  title: string;

  /**
   * Task's creation date
   */
  dateCreated: string;

  /**
   * Task's description
   */
  description?: string,

  /**
   * Task assignees, list of teammates' id
   */
  assignees: Array<string>,
}

/**
 * This interface represents the Task entity
 */
export default interface Task {
  /**
   * Task's unique identity
   */
  id: string;

  /**
   * Task's visible title
   */
  title: string;

  /**
   * Task's project unique identity
   */
  projectId?: string;

  /**
   * Task's unique identity to previous task (for subtasks)
   */
  parentId?: string;

  /**
   * Task's description
   */
  description?: string;

  /**
   * Task's assignees unique identities
   */
  assignees?: string[];

  /**
   * Task's creation date
   */
  dateCreated: string;
}

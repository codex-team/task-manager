/**
 * This interface represents the Task entity
 */
export default interface Task {
  /**
   * Task's unique identity
   */
  id: string;

  /**
   * Task's visible text
   */
  text: string;

  /**
   * Task's project unique identity
   */
  projectId: string;

  /**
   * Task's unique identity to previous task (for subtasks)
   */
  parentId?: string;

  /**
   * Task's assignees unique identities
   */
  assignees?: string[];

  /**
   * Task's creation date (stored in the format: 'Day of the week Month Date Year HH:MM:SS GMT...)  '
   * (ex. Tue Dec 21 2021 18:09:02 GMT+0000 (Coordinated Universal Time))
   */
  dateCreated?: string;
}

/**
 * This interface represents the Status entity
 */
export default interface Status {
  /**
   * Status's unique identity
   */
  id: string;

  /**
   * Status's project id
   */
  projectId: string;

  /**
   * Status label
   */
  label: string;
}

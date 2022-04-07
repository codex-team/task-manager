/**
 * This interface represents the Teammate entity
 */
export default interface Teammate {
  /**
   * Teammate's unique identity
   */
  _id: string;

  /**
   * Teammate's visible name
   */
  name: string;

  /**
   * Teammate's visible photo
   */
  photo?: string;

  /**
   * List of teammate's contacts
   */
  contacts?: { type: string, value: string }[];
}

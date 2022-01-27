/**
 * This interface represents the Teammate entity
 */
import ContactType from "./contactType";

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
  contacts?: ContactType;

  /**
   * Teammate's workspace unique identity
   */
  workspaceId: string;

  /**
   * Teammate's creation date (stored in the format: 'Day of the week Month Date Year HH:MM:SS GMT...)  '
   * (ex. Tue Dec 21 2021 18:09:02 GMT+0000 (Coordinated Universal Time))
   */
  dateCreated: string;
}

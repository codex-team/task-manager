/**
 * This interface represents the Teammate entity
 */
export default interface Teammate {
  /**
   * Teammate's unique identity
   */
  id: string;

  /**
   * Teammate photo
   */
  photo?: string,

  /**
   * List of contacts
   */
  contacts: Array<Contacts>
}

/**
 *  List of contact type constants
 */
export enum ContactTypes {
  'Telegram',
}

/**
 * This interface represents the Contact entity
 */
interface Contacts {
  /**
   * Contact type
   */
  type: ContactTypes,

  /**
   * Contact value(username or email address)
   */
  value: string,
}

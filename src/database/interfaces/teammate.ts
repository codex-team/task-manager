/**
 *  List of contact type constants
 */
export enum ContactTypes {
  'Telegram',
}

/**
 *  interface for teammate
 */
export interface Teammate {
  /**
   * Teammate name
   */
  name: string,
  /**
   * Teammate photo
   */
  photo?: string,
  /**
   * List of contacts
   */
  contacts: Array<Contact>
}

/**
 * interface for contact
 */
export interface Contact {
  /**
   * Contact type
   */
  type: ContactTypes,
  /**
   * Contact value(username or email address)
   */
  value: string,
}

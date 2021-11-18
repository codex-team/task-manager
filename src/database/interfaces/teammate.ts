import mongoose from 'mongoose';

export enum contactTypes {
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
  type?: contactTypes,
  /**
   * Contact username
   */
  userName?: string,
}

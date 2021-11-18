import mongoose from "mongoose";

/**
 *  interface for teammate
 */
export interface Teammate {
  /**
   * Teammate id
   */
  _id?: mongoose.Types.ObjectId,
  /**
   * Teammate name
   */
  name: String,
  /**
   * Teammate photo
   */
  photo?: String,
  /**
   * List of contacts
   */
  contacts?: Array<Contact>
}

/**
 * interface for contact
 */
interface Contact {
  /**
   * Contact type
   */
  type: String,
  /**
   * Contact username
   */
  userName: String,
}

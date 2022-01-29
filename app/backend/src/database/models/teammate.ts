import mongoose from '../index';
import Teammate from '../../../../types/entities/teammate';
import ContactType from '../../../../types/entities/contactType';

/**
 * Teammate schema
 */
const TeammateSchema: mongoose.Schema<Teammate> = new mongoose.Schema({
  /**
   * Teammate name
   */
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * Teammate photo
   */
  photo: {
    type: mongoose.Schema.Types.String,
  },

  /**
   * List of teammate's contacts
   */
  contacts: [ {
    /**
     * Contact type
     */
    type: {
      type: mongoose.Schema.Types.String,
      default: ContactType.Telegram,
    },
    /**
     * Contact value(username of email address)
     */
    value: {
      type: mongoose.Schema.Types.String,
    },
  } ],

  /**
   * Teammate creation date
   */
  dateCreated: {
    type: mongoose.Schema.Types.String,
    default: new Date().toString(),
  },
});

export default mongoose.model<Teammate>('Teammate', TeammateSchema);

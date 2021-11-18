import mongoose from "mongoose";

export interface Teammate {
  _id?: mongoose.Types.ObjectId,
  name: String,
  photo?: String,
  contacts?: Array<ContactType>
}

interface ContactType {
  type: String,
  userName: String,
}

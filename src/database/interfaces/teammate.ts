import mongoose from "mongoose";

export interface Teammate {
  _id: mongoose.Types.ObjectId,
  name: String,
  photo: String,
  contacts: Array<ContactType>
}

// enum social{
//   telegram,
//   vk,
//
// }

interface ContactType {
  type: String,
  value: String,
}

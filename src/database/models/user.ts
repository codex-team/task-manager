import mongoose from '../index';
import { UserDocument, UserModel } from '../interfaces/user';


const UserSchema: mongoose.Schema<UserDocument> = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  roleId: {
    type: mongoose.Schema.Types.Number,
    ref: 'Role',
  },
});

UserSchema.methods.setName = async function (name) {
  this.name = name;

  return this.save();
};

UserSchema.methods.getName = async function () {
  return this.name;
};

UserSchema.methods.setRoleId = async function (roleId) {
  this.roleId = roleId;

  return this.save();
};

UserSchema.methods.getRoleId = async function () {
  return this.roleId;
};

UserSchema.methods.getUserId = async function () {
  return this._id;
};

export default mongoose.model<UserDocument, UserModel>('User', UserSchema);



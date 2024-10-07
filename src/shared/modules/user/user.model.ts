import { Schema, Document, model } from 'mongoose';
import { User } from '../../types/index.js';

type UserDocumentType = User & Document;

export interface UserDocument extends UserDocumentType {
  createdAt: Date,
  updatedAt: Date,
}

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
    required: true,
  },
  avatarUrl: {
    type: String,
    required: true,
    minlength: [5, 'Min length for avatar path is 5'],
  },
  name: {
    type: String,
    required: true,
    minlength: [2, 'Min length for firstname is 2']
  },
  password: String,
  type: String,
}, { timestamps: true });

export const UserModel = model<UserDocument>('User', userSchema);

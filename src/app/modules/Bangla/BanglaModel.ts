import mongoose, { Schema, Document } from 'mongoose';
import { IBangla } from './BanglaInterfase';

export interface IBanglaDocument extends IBangla, Document {}

const BanglaSchema = new Schema<IBanglaDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const BanglaModel = mongoose.model<IBanglaDocument>(
  'Bangla',
  BanglaSchema,
);

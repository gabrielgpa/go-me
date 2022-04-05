import { model, Schema } from 'mongoose';

import { VoluntaryModel } from '@/domain/models/voluntary';

const schema = new Schema<VoluntaryModel>({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const VoluntaryModelSchema = model<VoluntaryModel>('voluntarys', schema);

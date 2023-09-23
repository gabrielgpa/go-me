import { model, Schema } from 'mongoose';

import { VoluntaryModel } from '@/domain/models/voluntary';

const schema = new Schema<VoluntaryModel>({
  id: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: true },
  available: { type: Boolean, required: true, default: true },
  raffles: [{ type: Schema.Types.ObjectId, ref: 'raffles' }],
});

export const VoluntaryModelSchema = model<VoluntaryModel>(
  'voluntaries',
  schema
);

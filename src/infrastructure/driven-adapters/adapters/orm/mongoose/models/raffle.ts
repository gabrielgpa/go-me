import { model, Schema } from 'mongoose';

import { RaffleModel } from '@/domain/models/raffle';

const schema = new Schema<RaffleModel>(
  {
    id: { type: Schema.Types.ObjectId },
    type: {
      type: String,
      enum: Object.values(RaffleModel.RaffleTypeModel),
      default: RaffleModel.RaffleTypeModel.DAILY,
    },
    voluntary: { type: Schema.Types.ObjectId, ref: 'voluntaries' },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
  }
);

export const RaffleModelSchema = model<RaffleModel>('raffles', schema);

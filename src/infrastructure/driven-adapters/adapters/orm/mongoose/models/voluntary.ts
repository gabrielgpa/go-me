import { VoluntaryModel } from '@/domain/models/voluntary';
import { model, Schema } from "mongoose";

const schema = new Schema<VoluntaryModel>({
    id:  { type: String },
    name: { type: String, required: true },
    email:  { type: String, required: true }
});

export const VoluntaryModelSchema = model<VoluntaryModel>('voluntarys', schema);

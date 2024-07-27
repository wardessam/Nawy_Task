import mongoose, { Document, Schema } from 'mongoose';

export interface IApartment extends Document {
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ApartmentSchema: Schema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true }
});

export default mongoose.model<IApartment>('Apartment', ApartmentSchema);

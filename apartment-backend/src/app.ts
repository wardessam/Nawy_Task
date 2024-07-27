import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apartmentRoutes from './routes/apartmentRoutes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(cors());
app.use(express.json());
console.log('MONGO_URI:', process.env.MONGO_URI);

if (!MONGO_URI) {
  throw new Error('MONGO_URI environment variable is not defined');
}
// Routes
app.use('/api/apartments', apartmentRoutes);

mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

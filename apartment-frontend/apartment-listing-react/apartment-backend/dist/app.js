"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const apartmentRoutes_1 = __importDefault(require("./routes/apartmentRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log('MONGO_URI:', process.env.MONGO_URI);
if (!MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not defined');
}
// Routes
app.use('/api/apartments', apartmentRoutes_1.default);
mongoose_1.default.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

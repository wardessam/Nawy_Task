"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApartment = exports.getApartmentById = exports.getApartments = void 0;
const apartment_1 = __importDefault(require("../models/apartment"));
// Get all apartments
const getApartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartments = yield apartment_1.default.find();
        console.log("offf ", apartments);
        res.json(apartments);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getApartments = getApartments;
// Get apartment by ID
const getApartmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = yield apartment_1.default.findById(req.params.id);
        if (apartment) {
            res.json(apartment);
        }
        else {
            res.status(404).json({ message: 'Apartment not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getApartmentById = getApartmentById;
// Add a new apartment
const createApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, location, price, imageUrl, description } = req.body;
    try {
        const newApartment = new apartment_1.default({ title, location, price, imageUrl, description });
        yield newApartment.save();
        res.status(201).json(newApartment);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createApartment = createApartment;

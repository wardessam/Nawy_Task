import { Request, Response } from 'express';
import Apartment from '../models/apartment';

// Get all apartments
export const getApartments = async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.find();
    console.log("offf ",apartments);
    res.json(apartments);
  } catch (err : any) {
    res.status(500).json({ message: err.message });
  }
};

// Get apartment by ID
export const getApartmentById = async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).json({ message: 'Apartment not found' });
    }
  } catch (err : any) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new apartment
export const createApartment = async (req: Request, res: Response) => {
  const { title, location, price, imageUrl, description } = req.body;

  try {
    const newApartment = new Apartment({ title, location, price, imageUrl, description });
    await newApartment.save();
    res.status(201).json(newApartment);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};

import { Router } from 'express';
import { getApartments, getApartmentById, createApartment } from '../controllers/apartmentController';

const router = Router();

// Route to get all apartments
router.get('/', getApartments);

// Route to get an apartment by ID
router.get('/:id', getApartmentById);

// Route to add a new apartment
router.post('/', createApartment);

export default router;

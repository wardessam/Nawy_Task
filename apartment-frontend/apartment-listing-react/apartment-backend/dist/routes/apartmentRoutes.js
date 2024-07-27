"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apartmentController_1 = require("../controllers/apartmentController");
const router = (0, express_1.Router)();
// Route to get all apartments
router.get('/', apartmentController_1.getApartments);
// Route to get an apartment by ID
router.get('/:id', apartmentController_1.getApartmentById);
// Route to add a new apartment
router.post('/', apartmentController_1.createApartment);
exports.default = router;

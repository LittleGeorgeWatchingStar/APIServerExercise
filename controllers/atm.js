import express from 'express';
import mongoose from 'mongoose';

import AtmMessage from '../models/atmModel.js';

const router = express.Router();

export const getAtm = async (req, res) => {
    
    try {    
        const posts = await AtmMessage.find();

        res.status(200).json({ data: posts});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const createAtm = async (req, res) => {
    const atm = req.body;

    const newAtmMessage = new AtmMessage({ ...atm })

    try {
        await newAtmMessage.save();

        res.status(201).json(newAtmMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export default router;
import {Worker} from "../models/Worker";
import express from 'express';

const router = express.Router();

export const getWorkers = async (req, res) => {
    try {
        const workers = await Worker.find();
        res.status(200).json(workers);
    } catch (error) {
        const err = new Error(error.message);
        throw err;
    }
}
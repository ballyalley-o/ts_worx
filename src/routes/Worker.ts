import { Router } from "express";
import { Worker } from "../models/Worker";


let workers: Worker[] = [];
const router = Router();


router.get('/');
router.post('/');
router.put('/:id');
router.delete('/:id');

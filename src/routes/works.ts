import { Router }from 'express';
import { Work } from '../models/Work';
import { getWorkQueue, addWorkQueue, updateWorkQueue, deleteWorkQueue } from '../../controllers/works';

let works: Work[] = [];
const router = Router();

router.get('/', getWorkQueue);
router.post('/', addWorkQueue);
router.put('/:id', updateWorkQueue);
router.delete('/:id', deleteWorkQueue);


export default router;
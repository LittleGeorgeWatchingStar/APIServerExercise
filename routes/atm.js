import express from 'express';

import { getAtm, createAtm } from '../controllers/atm.js';

const router = express.Router();

router.get('/atm', getAtm);

router.post('/atm', createAtm);

export default router;
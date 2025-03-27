import express from 'express';
import { BanglaController } from './BanglaController';

const router = express.Router();

router.post('/', BanglaController.createBangla);
router.get('/', BanglaController.getAllBangla);
router.get('/:id', BanglaController.getBanglaById);
router.put('/:id', BanglaController.updateBangla);
router.delete('/:id', BanglaController.deleteBangla);

export const BanglaRouter = router;

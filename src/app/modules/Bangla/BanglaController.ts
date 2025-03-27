import { Request, Response } from 'express';
import { BanglaService } from './BanglaService';

export class BanglaController {
  // Create a new Bangla entry
  static async createBangla(req: Request, res: Response) {
    try {
      const banglaData = await BanglaService.createBangla(req.body);
      res.status(201).json(banglaData);
    } catch (error) {
      res.status(500).json({ error: 'null' });
    }
  }

  // Get all Bangla entries
  static async getAllBangla(req: Request, res: Response) {
    try {
      const banglaData = await BanglaService.getAllBangla();
      res.status(200).json(banglaData);
    } catch (error) {
      res.status(500).json({ error: 'null' });
    }
  }

  // Get Bangla entry by ID
  static async getBanglaById(req: Request, res: Response) {
    try {
      const banglaData = await BanglaService.getBanglaById(req.params.id);
      if (!banglaData)
        return res.status(404).json({ message: 'Data not found' });
      res.status(200).json(banglaData);
    } catch (error) {
      res.status(500).json({ error: 'null' });
    }
  }

  // Update Bangla entry
  static async updateBangla(req: Request, res: Response) {
    try {
      const updatedData = await BanglaService.updateBangla(
        req.params.id,
        req.body,
      );
      if (!updatedData)
        return res.status(404).json({ message: 'Data not found' });
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ error: 'null' });
    }
  }

  // Delete Bangla entry
  static async deleteBangla(req: Request, res: Response) {
    try {
      const deletedData = await BanglaService.deleteBangla(req.params.id);
      if (!deletedData)
        return res.status(404).json({ message: 'Data not found' });
      res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'null' });
    }
  }
}

import { BanglaModel } from './BanglaModel';
import { IBangla } from './BanglaInterfase';

export class BanglaService {
  // Create Bangla Data
  static async createBangla(data: IBangla) {
    return await BanglaModel.create(data);
  }

  // Get All Bangla Data
  static async getAllBangla() {
    return await BanglaModel.find();
  }

  // Get Bangla Data by ID
  static async getBanglaById(id: string) {
    return await BanglaModel.findById(id);
  }

  // Update Bangla Data
  static async updateBangla(id: string, data: IBangla) {
    return await BanglaModel.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete Bangla Data
  static async deleteBangla(id: string) {
    return await BanglaModel.findByIdAndDelete(id);
  }
}

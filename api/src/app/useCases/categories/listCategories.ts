import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (err) {
    console.log('❌ - Error in list categories: ', err);
    res.sendStatus(500);
  }

}

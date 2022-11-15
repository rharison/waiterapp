import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategorie(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where('category').equals(categoryId);

    res.json(products);
  } catch (err) {
    console.log('❌ - Error in list products by categorie: ', err);
    res.sendStatus(500);
  }
}

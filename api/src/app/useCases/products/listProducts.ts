import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
  const products = await Product.find();

  res.json(products);
}

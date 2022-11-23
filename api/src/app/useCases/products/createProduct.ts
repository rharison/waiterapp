import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, igredients, category } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: igredients ? JSON.parse(igredients) : [],
      category,
    });

    res.status(201).json(product);
  } catch(err) {
    console.log('❌ - Error in create product: ', err);
    res.sendStatus(500);
  }
}

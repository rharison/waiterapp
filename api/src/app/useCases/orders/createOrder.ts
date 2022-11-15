import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({ table, products });

    return res.status(201).json(order);
  } catch(err) {
    console.log('❌ - Error in create order: ', err);
    res.sendStatus(500);
  }
}

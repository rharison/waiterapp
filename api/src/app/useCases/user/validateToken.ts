import { Request, Response } from 'express';
import { supabase } from '../../..';

export async function validateToken(req: Request, res: Response) {
  try {
    const { token } = req.body;

    const { data: { user } } = await supabase.auth.getUser(token);

    if (!user) {
      return res.status(401).json({
        message: 'Token inválido',
      });
    }

    return res.sendStatus(200);
  } catch(err) {
    console.log('❌ - Error in Login: ', err);
    res.sendStatus(500);
  }
}

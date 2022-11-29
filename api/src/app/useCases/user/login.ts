import { Request, Response } from 'express';
import { supabase } from '../../..';

export async function login(req: Request, res: Response) {
  try {
    const {
      email,
      password,
    } = req.body;
    console.log('oi JAMEL');
    const { data , error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log('OIOIOIOIOIOIO');

    if (error) {
      return res.status(400).json({
        internalMessage: error.message,
        message: 'E-mail ou senha incorretos.',
      });
    }

    const token = data?.session?.access_token;

    return res.status(200).json({
      token,
    });
  } catch(err) {
    console.log('❌ - Error in Login: ', err);
    res.sendStatus(500);
  }
}

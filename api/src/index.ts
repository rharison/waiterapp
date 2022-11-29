import * as dotenv from 'dotenv';
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router } from './router';
import cors from 'cors';
import { Server } from 'socket.io';
import { createClient } from '@supabase/supabase-js';
dotenv.config();

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(url, key);

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.odl9svw.mongodb.net/waiterapp?retryWrites=true&w=majority`)
  .then(() => {
    const port = process.env.PORT || 3001;

    app.use(cors());
    app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log('Connection failed to MongoDB.');
  });


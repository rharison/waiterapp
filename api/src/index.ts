import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router } from './router';

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.odl9svw.mongodb.net/waiterapp?retryWrites=true&w=majority`)
  .then(() => {
    const app = express();
    const port = process.env.PORT || 3001;

    app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log('Connection failed to MongoDB.');
  });


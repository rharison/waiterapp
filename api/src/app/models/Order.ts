import { model, Schema } from 'mongoose';

export const Category = model('Order', new Schema({
  table: {
    required: true,
    type: String,
  },
  statun: {
    required: true,
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        required: true,
        type: Number,
        default: 1,
      }
    }]
  }
}));

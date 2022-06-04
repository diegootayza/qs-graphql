import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class Quini6 {
  static getQuini6() {
    return this.find()
      .limit(1)
      .sort({ date: -1 });
  }

  static getQuini6Limit(limit) {
    return this.find()
      .limit(limit)
      .sort({ date: -1 });
  }
}

const Quini6Schema = new Schema(
  {
    date: Date,
    draw_number: String,
    tradicional_numbers: [String],
    tradicional_prizes: [
      {
        hits: String,
        winners: String,
        prize: String
      }
    ],
    segunda_vuelta_numbers: [String],
    segunda_vuelta_prizes: [
      {
        hits: String,
        winners: String,
        prize: String
      }
    ],
    revancha_numbers: [String],
    revancha_prizes: {
      winners: String,
      prize: String
    },
    siempre_sale_numbers: [String],
    siempre_sale_prizes: {
      winners: String,
      prize: String
    },
    premio_extra: String,
    premio_extra_prizes: {
      hits: String,
      winners: String,
      prize: String
    },
    prize_next_move: String
  },
  {
    collection: 'quini6'
  }
);

Quini6Schema.loadClass(Quini6);
export default Mongoose.model('Quini6', Quini6Schema);

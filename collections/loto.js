import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class Loto {
  static getLoto() {
    return this.find()
      .limit(1)
      .sort({ date: -1 });
  }

  static getLotoLimit(limit) {
    return this.find()
      .limit(limit)
      .sort({ date: -1 });
  }
}

const LotoSchema = new Schema(
  {
    date: Date,
    draw_number: String,
    tradicional_numbers: [String],
    jackpot1_tradicional: String,
    jackpot2_tradicional: String,
    tradicional_prizes: [
      {
        label: String,
        winners: String,
        prize: String
      }
    ],
    desquite_numbers: [String],
    jackpot1_desquite: String,
    jackpot2_desquite: String,
    desquite_prizes: [
      {
        label: String,
        winners: String,
        prize: String
      }
    ],
    sale_sale_numbers: [String],
    jackpot1_sale_sale: String,
    jackpot2_sale_sale: String,
    jackpot3_sale_sale: String,
    jackpot4_sale_sale: String,
    sale_sale_prizes: {
      winners: String,
      prize: String
    },
    sale_sale_duplicador: String,
    prize_next_move: String
  },
  {
    collection: 'loto'
  }
);

LotoSchema.loadClass(Loto);
export default Mongoose.model('Loto', LotoSchema);

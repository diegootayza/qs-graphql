import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class Brinco {
  static getBrinco() {
    return this.find()
      .limit(1)
      .sort({ date: -1 });
  }

  static getBrincoLimit(limit) {
    return this.find()
      .limit(limit)
      .sort({ date: -1 });
  }
}

const BrincoSchema = new Schema(
  {
    date: Date,
    draw_number: String,
    numbers: [String],
    prizes: [
      {
        hits: String,
        winners: String,
        prize: String
      }
    ],
    next_prize: String
  },
  {
    collection: 'brinco'
  }
);

BrincoSchema.loadClass(Brinco);
export default Mongoose.model('Brinco', BrincoSchema);

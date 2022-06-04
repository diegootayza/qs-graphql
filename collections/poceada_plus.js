import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class PoceadaPlus {
  static getPoceadaPlus() {
    return this.find()
      .limit(1)
      .sort({ date: -1 });
  }

  static getPoceadaPlusLimit(limit) {
    return this.find()
      .limit(limit)
      .sort({ date: -1 });
  }
}

const PoceadaPlusSchema = new Schema(
  {
    draw_number: String,
    date: Date,
    numbers: [String],
    prizes: [
      {
        hits: String,
        winners: String,
        prize: String
      }
    ]
  },
  {
    collection: 'poceada_plus'
  }
);

PoceadaPlusSchema.loadClass(PoceadaPlus);
export default Mongoose.model('PoceadaPlus', PoceadaPlusSchema);

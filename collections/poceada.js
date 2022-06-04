import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class Poceada {
  static getPoceada() {
    return this.find()
      .limit(1)
      .sort({ date: -1 });
  }
  static getPoceadaLimit(limit) {
    return this.find()
      .limit(limit)
      .sort({ date: -1 });
  }
}

const PoceadaSchema = new Schema(
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
    ]
  },
  {
    collection: 'poceada'
  }
);

PoceadaSchema.loadClass(Poceada);
export default Mongoose.model('Poceada', PoceadaSchema);

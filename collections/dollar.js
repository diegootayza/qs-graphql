import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class Dollar {
  static getDollar() {
    return this.findOne();
  }
}

const DollarSchema = new Schema(
  {
    buy: { type: String },
    sell: { type: String }
  },
  {
    collection: 'dollar'
  }
);

DollarSchema.loadClass(Dollar);

export default Mongoose.model('Dollar', DollarSchema);

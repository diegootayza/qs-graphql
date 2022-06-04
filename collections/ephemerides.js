import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class Ephemerides {
  static getEphemerides() {
    return this.find();
  }
}

const EphemeridesSchema = new Schema(
  {
    number: { type: String },
    image: { type: String },
    description: { type: String }
  },
  {
    collection: 'ephemerides'
  }
);

EphemeridesSchema.loadClass(Ephemerides);

export default Mongoose.model('Ephemerides', EphemeridesSchema);

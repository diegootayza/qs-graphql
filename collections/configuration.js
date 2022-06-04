import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class Configuration {
  static getConfiguration() {
    return this.findOne();
  }
}

const ConfigurationSchema = new Schema(
  {
    showNumbers: { type: String },
    showEphemerides: { type: String },
    showRecomendations: { type: String },
    blink: { type: String },
    blink_message: { type: String },
    date: { type: Date },
    current_date: { type: Date }
  },
  {
    collection: 'configuration'
  }
);

ConfigurationSchema.loadClass(Configuration);
export default Mongoose.model('Configuration', ConfigurationSchema);

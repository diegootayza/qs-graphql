import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class WeeklyData {
  static getWeeklyData() {
    return this.find().limit(1);
  }
}

const WeeklyDataSchema = new Schema(
  {
    number1: { type: String },
    number2: { type: String },
    number3: { type: String },
    number4: { type: String },
    number5: { type: String },
    number6: { type: String },
    date: { type: Date }
  },
  {
    collection: 'weekly_data'
  }
);

WeeklyDataSchema.loadClass(WeeklyData);

export default Mongoose.model('WeeklyData', WeeklyDataSchema);

import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class ScheduleDraw {
  static getScheduleDraw(draw, day) {
    return this.find({
      $and: [
        {
          draw: {
            $eq: draw
          },
          day: {
            $gte: day
          }
        }
      ]
    }).limit(1);
  }
}

const ScheduleDrawSchema = new Schema(
  {
    draw: String,
    day: String,
    hour: String
  },
  {
    collection: 'schedule_draw'
  }
);

ScheduleDrawSchema.loadClass(ScheduleDraw);
export default Mongoose.model('ScheduleDraw', ScheduleDrawSchema);

import Mongoose from 'mongoose';
import * as moment from 'moment-timezone';

const Schema = Mongoose.Schema;

class Recomendation {
  static getRecomendations() {
    let today = moment.tz('America/Argentina/Buenos_Aires').format();
    let yesterday = moment.tz('America/Argentina/Buenos_Aires').subtract(2, 'days');
    return this.find({
      date: {
        $gte: yesterday.toDate(),
        $lt: today
      }
    });
  }

  static checkRecomendations(id_user) {
    let today = moment.tz(new Date(), 'America/Argentina/Buenos_Aires');
    let month = today.month().valueOf() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let date = today.year() + '-' + month + '-' + today.date();
    return this.count({
      date: {
        $eq: new Date(date)
      },
      id_user: id_user
    });
  }

  static saveRecomendation(payload) {
    return this(payload).save();
  }
}

const RecomendationSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    recomendation: { type: String },
    date: { type: Date },
    id_user: { type: String },
    is_facebook: { type: String },
    is_google: { type: String }
  },
  {
    collection: 'recomendations'
  }
);

RecomendationSchema.loadClass(Recomendation);

export default Mongoose.model('Recomendation', RecomendationSchema);

/* ---------------------------------------------------------------------------------
   * @ description : This is the db configration file.
---------------------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import Bluebird from 'bluebird';
import config from 'config';
import logger from './utilities/logger';

// Connect to MongoDB
const db = config.get('db');

export default async () => {

  Mongoose.Promise = Bluebird;

  Mongoose.connect('mongodb://quesalio:quesalio777@52.204.203.35:27017/quesalio', config.get('db.mongoose'), err => {
    if (err) {
      logger.error('+++ DB Error', err);
      // process.exit(1);
    } else {
      logger.info('+++ MongoDB Connected');
    }
  });
};

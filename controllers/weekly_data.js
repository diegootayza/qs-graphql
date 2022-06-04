/* -----------------------------------------------------------------------
   * @ description : This is the user controller layer.
----------------------------------------------------------------------- */

import { getWeeklyData } from '../services/weekly_data';
import { failAction } from '../utilities/rest';

export const getWeeklyDataResults = async (root, payload, context) => {
  try {
    return await getWeeklyData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

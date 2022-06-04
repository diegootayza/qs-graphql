/* -----------------------------------------------------------------------
   * @ description : This is the user service layer.
----------------------------------------------------------------------- */

import WeeklyData from '../collections/weekly_data';

export const getWeeklyData = async payload => {
  return await WeeklyData.getWeeklyData();
};

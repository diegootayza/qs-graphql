/* -----------------------------------------------------------------------
   * @ description : This is the user service layer.
----------------------------------------------------------------------- */

import Ephemerides from '../collections/ephemerides';

export const getEphemeridesData = async payload => {
  return await Ephemerides.getEphemerides();
};

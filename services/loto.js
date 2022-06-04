/* -----------------------------------------------------------------------
   * @ description : This is the user service layer.
----------------------------------------------------------------------- */

import Loto from '../collections/loto';

export const getLotoData = async payload => {
  return await Loto.getLoto();
};

export const getLotoLimitData = async payload => {
  return await Loto.getLotoLimit(payload.limit);
};

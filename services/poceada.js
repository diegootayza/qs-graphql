/* -----------------------------------------------------------------------
   * @ description : This is the user service layer.
----------------------------------------------------------------------- */

import Poceada from '../collections/poceada';

export const getPoceadaData = async payload => {
  return await Poceada.getPoceada();
};

export const getPoceadaLimitData = async payload => {
  return await Poceada.getPoceadaLimit(payload.limit);
};

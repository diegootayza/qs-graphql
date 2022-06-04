/* -----------------------------------------------------------------------
   * @ description : This is the user service layer.
----------------------------------------------------------------------- */

import Dollar from '../collections/dollar';

export const getDollar = async payload => {
  return await Dollar.getDollar();
};

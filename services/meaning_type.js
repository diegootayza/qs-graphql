/* -----------------------------------------------------------------------
   * @ description : This is the user service layer.
----------------------------------------------------------------------- */

import MeaningType from '../collections/meaning_type';

export const getMeaningTypes = async payload => {
  return await MeaningType.getMeaningTypes();
};
export const getMeaningType = async payload => {
  return await MeaningType.getMeaningType(payload);
};

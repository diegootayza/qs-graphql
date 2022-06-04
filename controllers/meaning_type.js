/* -----------------------------------------------------------------------
   * @ description : This is the user controller layer.
----------------------------------------------------------------------- */

import { getMeaningType, getMeaningTypes } from '../services/meaning_type';
import { failAction } from '../utilities/rest';

export const getMeaningTypesResult = async (root, payload, context) => {
  try {
    return await getMeaningTypes();
  } catch (error) {
    failAction(error.message);
  }
};

export const getMeaningTypeResult = async (root, payload, context) => {
  try {
    return await getMeaningType(root.id);
  } catch (error) {
    failAction(error.message);
  }
};

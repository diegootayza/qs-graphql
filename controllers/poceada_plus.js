import { getPoceadaPlusData, getPoceadaPlusLimitData } from '../services/poceada_plus';
import { failAction } from '../utilities/rest';

export const getPoceadaPlusResults = async (root, payload, context) => {
  try {
    return await getPoceadaPlusData();
  } catch (error) {
    failAction(error.message);
  }
};

export const getPoceadaPlusLimitResults = async (root, payload, context) => {
  try {
    return await getPoceadaPlusLimitData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

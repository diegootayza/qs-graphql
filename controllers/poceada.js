import { getPoceadaData, getPoceadaLimitData } from '../services/poceada';
import { failAction } from '../utilities/rest';

export const getPoceadaResults = async (root, payload, context) => {
  try {
    return await getPoceadaData();
  } catch (error) {
    failAction(error.message);
  }
};

export const getPoceadaLimitResults = async (root, payload, context) => {
  try {
    return await getPoceadaLimitData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

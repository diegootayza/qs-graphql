import { getBrincoData, getBrincoLimitData } from '../services/brinco';
import { failAction } from '../utilities/rest';

export const getBrincoResults = async (root, payload, context) => {
  try {
    return await getBrincoData();
  } catch (error) {
    failAction(error.message);
  }
};

export const getBrincoLimitResults = async (root, payload, context) => {
  try {
    return await getBrincoLimitData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

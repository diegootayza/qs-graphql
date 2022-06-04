import { getLotoData, getLotoLimitData } from '../services/loto';
import { failAction } from '../utilities/rest';

export const getLotoResults = async (root, payload, context) => {
  try {
    return await getLotoData();
  } catch (error) {
    failAction(error.message);
  }
};

export const getLotoLimitResults = async (root, payload, context) => {
  try {
    return await getLotoLimitData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

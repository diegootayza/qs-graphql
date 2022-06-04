import { getDollar } from '../services/dollar';
import { failAction } from '../utilities/rest';

export const getDollarValue = async (root, payload, context) => {
  try {
    return await getDollar();
  } catch (error) {
    failAction(error.message);
  }
};

import { getPrimeraData, getPrimeraModified } from '../services/primera';
import { failAction } from '../utilities/rest';

export const getPrimeraResults = async (root, payload, context) => {
  try {
    return await getPrimeraData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

export const getPrimeraResultsModified = async (root, payload, context) => {
  try {
    return await getPrimeraModified(payload);
  } catch (error) {
    failAction(error.message);
  }
};

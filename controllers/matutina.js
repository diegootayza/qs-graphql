import { getMatutinaData, getMatutinaModified } from '../services/matutina';
import { failAction } from '../utilities/rest';

export const getMatutinaResults = async (root, payload, context) => {
  try {
    return await getMatutinaData(payload);
  } catch (error) {
    failAction(error.message);
  }
};
export const getMatutinaResultsModified = async (root, payload, context) => {
  try {
    return await getMatutinaModified(payload);
  } catch (error) {
    failAction(error.message);
  }
};

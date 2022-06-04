import { getVespertinaData, getVespertinaModified } from '../services/vespertina';
import { failAction } from '../utilities/rest';

export const getVespertinaResults = async (root, payload, context) => {
  try {
    return await getVespertinaData(payload);
  } catch (error) {
    failAction(error.message);
  }
};
export const getVespertinaResultsModified = async (root, payload, context) => {
  try {
    return await getVespertinaModified(payload);
  } catch (error) {
    failAction(error.message);
  }
};

import { getNocturnaData, getNocturnaModified } from '../services/nocturna';
import { failAction } from '../utilities/rest';

export const getNocturnaResults = async (root, payload, context) => {
  try {
    return await getNocturnaData(payload);
  } catch (error) {
    failAction(error.message);
  }
};
export const getNocturnaResultsModified = async (root, payload, context) => {
  try {
    return await getNocturnaModified(payload);
  } catch (error) {
    failAction(error.message);
  }
};

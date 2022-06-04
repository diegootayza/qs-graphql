import {
  getRecomendations,
  checkRecomendations,
  saveRecomendation
} from '../services/recomendation';
import { failAction } from '../utilities/rest';

export const getRecomendation = async (root, payload, context) => {
  try {
    return getRecomendations(payload);
  } catch (error) {
    failAction(error.message);
  }
};

export const checkRecomendation = async payload => {
  try {
    return checkRecomendations(payload.id_user);
  } catch (error) {
    failAction(error.message);
  }
};
export const saveRecomendations = async payload => {
  try {
    //console.log(payload);
    return saveRecomendation(payload);
  } catch (error) {
    failAction(error.message);
  }
};

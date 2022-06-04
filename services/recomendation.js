import Recomendation from '../collections/recomendation';

export const getRecomendations = async payload => {
  return await Recomendation.getRecomendations();
};
export const checkRecomendations = async payload => {
  return await Recomendation.checkRecomendations(payload);
};

export const saveRecomendation = async payload => {
  return await Recomendation.saveRecomendation(payload);
};

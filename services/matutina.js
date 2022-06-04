import Matutina from '../collections/matutina';

export const getMatutinaData = async payload => {
  return await Matutina.getMatutina(payload.ids, payload.date);
};
export const getMatutinaModified = async payload => {
  return await Matutina.getMatutinaModified(payload.ids);
};

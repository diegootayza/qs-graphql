import Nocturna from '../collections/nocturna';

export const getNocturnaData = async payload => {
  return await Nocturna.getNocturna(payload.ids, payload.date);
};
export const getNocturnaModified = async payload => {
  return await Nocturna.getNocturnaModified(payload.ids);
};

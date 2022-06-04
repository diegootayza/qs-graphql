import Primera from '../collections/primera';

export const getPrimeraData = async payload => {
  return await Primera.getPrimera(payload.ids, payload.date);
};
export const getPrimeraModified = async payload => {
  return await Primera.getPrimeraModified(payload.ids);
};

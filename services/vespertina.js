import Vespertina from '../collections/vespertina';

export const getVespertinaData = async payload => {
  return await Vespertina.getVespertina(payload.ids, payload.date);
};
export const getVespertinaModified = async payload => {
  return await Vespertina.getVespertinaModified(payload.ids);
};

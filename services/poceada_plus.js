import PoceadaPlus from '../collections/poceada_plus';

export const getPoceadaPlusData = async payload => {
  return await PoceadaPlus.getPoceadaPlus();
};

export const getPoceadaPlusLimitData = async payload => {
  return await PoceadaPlus.getPoceadaPlusLimit(payload.limit);
};

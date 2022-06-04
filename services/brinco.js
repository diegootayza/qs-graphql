import Brinco from '../collections/brinco';

export const getBrincoData = async payload => {
  return await Brinco.getBrinco();
};

export const getBrincoLimitData = async payload => {
  return await Brinco.getBrincoLimit(payload.limit);
};

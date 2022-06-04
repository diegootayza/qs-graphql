import Quini6 from '../collections/quini6';

export const getQuini6Data = async payload => {
  return await Quini6.getQuini6();
};

export const getQuini6LimitData = async payload => {
  return await Quini6.getQuini6Limit(payload.limit);
};

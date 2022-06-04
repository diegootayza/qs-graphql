import { getQuini6Data, getQuini6LimitData } from '../services/quini6';
import { failAction } from '../utilities/rest';

export const getQuini6Results = async (root, payload, context) => {
  try {
    return await getQuini6Data();
  } catch (error) {
    failAction(error.message);
  }
};

export const getQuini6LimitResults = async (root, payload, context) => {
  try {
    return await getQuini6LimitData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

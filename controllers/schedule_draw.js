import { getScheduleDraw } from '../services/schedule_draw';
import { failAction } from '../utilities/rest';

export const getScheduleDrawResults = async (root, payload, context) => {
  try {
    return await getScheduleDraw(payload);
  } catch (error) {
    failAction(error.message);
  }
};

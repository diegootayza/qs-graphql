import ScheduleDraw from '../collections/schedule_draw';

export const getScheduleDraw = async payload => {
  return await ScheduleDraw.getScheduleDraw(payload.draw, payload.day);
};

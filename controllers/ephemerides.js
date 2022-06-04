/* -----------------------------------------------------------------------
   * @ description : This is the user controller layer.
----------------------------------------------------------------------- */

import { getEphemeridesData } from '../services/ephemerides';
import { failAction } from '../utilities/rest';

export const getEphemeridesDataResults = async (root, payload, context) => {
  try {
    return await getEphemeridesData(payload);
  } catch (error) {
    failAction(error.message);
  }
};

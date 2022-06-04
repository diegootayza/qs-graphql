/* -----------------------------------------------------------------------
   * @ description : This is the user service layer.
----------------------------------------------------------------------- */

import Configuration from '../collections/configuration';

export const getConfiguration = async payload => {
  return await Configuration.getConfiguration();
};

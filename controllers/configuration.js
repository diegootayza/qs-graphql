import { getConfiguration } from '../services/configuration';
import { failAction } from '../utilities/rest';

export const getConfigurationData = async (root, payload, context) => {
  try {
    return await getConfiguration();
  } catch (error) {
    failAction(error.message);
  }
};

/* -----------------------------------------------------------------------
   * @ description : This is the user controller layer.
----------------------------------------------------------------------- */

import { register, login, logout } from '../services/user';
import { failAction } from '../utilities/rest';
import Messages from '../utilities/messages';
// import logger from '../utilities/logger';
import pubsub from '../utilities/subscriptions';
const SOMETHING_CHANGED_TOPIC = 'something_changed';

export const registerUser = async (root, payload, context) => {
  try {
    let reg = await register(payload);
    //return await register(payload);
    pubsub.publish(SOMETHING_CHANGED_TOPIC, { newUser: reg });
    return reg;
  } catch (error) {
    failAction(error.message);
  }
};

export const loginUser = async (root, payload, context) => {
  try {
    return await login(payload);
  } catch (error) {
    failAction(error.message);
  }
};

export const logoutUser = async (root, payload, context) => {
  const { auth: { isAuthenticated, message } } = context;
  try {
    if (!isAuthenticated) throw new Error(message);
    const { auth: { credentials: { user, token } } } = context;
    await logout({ user, token });
    return Messages.logoutSuccessfull;
  } catch (error) {
    failAction(error.message);
  }
};

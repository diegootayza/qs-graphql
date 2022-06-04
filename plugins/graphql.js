/* ------------------------------------------------------------------------------------------------
   * @ description : Here we are creating the Graphql Plugin.
------------------------------------------------------------------------------------------------- */

import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import { formatError } from 'apollo-errors';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
//import {authContext} from '../utilities/rest';
import schema from '../schema';
import logger from '../utilities/logger';

export default {
  name: 'Graphql',
  version: '1.0.0',
  register: async (
    server,
    {
      path = '/graphql',
      subscriptionsPath = '/subscriptions',
      graphiql = true,
      graphiqlPath = '/graphiql',
      graphiqlOptions
    }
  ) => {
    let subscriptionsEndpoint = `ws://${server.info.host}:${server.info.port}${subscriptionsPath}`;
    let plugins = [
      {
        plugin: graphqlHapi,
        options: {
          path,
          graphqlOptions: async request => ({
            //context: {auth: await authContext(request)},
            context: {},
            schema,
            formatError
          }),
          route: {
            cors: true
          }
        }
      }
    ];

    if (graphiql) {
      plugins.push({
        plugin: graphiqlHapi,
        options: {
          path: graphiqlPath,
          graphiqlOptions: {
            endpointURL: path,
            ...graphiqlOptions,
            subscriptionsEndpoint
          }
        }
      });
    }
    // setup graphql server
    await server.register(plugins);

    // setup subscription server
    SubscriptionServer.create(
      {
        execute,
        subscribe,
        schema,
        onConnect: async => {
          logger.info('+++ Subscription Connected');
        },
        /*onConnect: async ({token}, webSocket) => {
                    console.log('connected');
                    logger.info('+++ Subscription Connected');

                    // const userContext = authContext(token);

                    // if (userContext.isAuthenticated) {
                    //   return { ...userContext };
                    // }

                    // throw new Error(userContext.message);


                },*/
        onDisconnect: webSocket => {
          logger.info('+++ Subscription Disconnected');
        }
      },
      {
        server: server.listener,
        path: subscriptionsPath
      }
    );

    logger.info(`+++ GraphQL running at: ${server.info.uri}${path}`);
    logger.info(`+++ GraphQL Subscriptions running at: ${subscriptionsEndpoint}`);
    logger.info(`+++ GraphiQL running at: ${server.info.uri}${graphiqlPath}`);
  }
};

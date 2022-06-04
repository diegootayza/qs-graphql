import './utilities/global';
import Hapi from 'hapi';
// import config from 'config';
import plugins from './plugins';
import logger from './utilities/logger';
import { failActionJoi } from './utilities/rest';
// import fs from 'fs';

// const app = config.get('app');

export default async () => {
  // const server = new Hapi.Server({
  //   host: app.host,
  //   port: app.port,
  //   routes: {
  //     cors: {
  //       origin: ['*'],
  //       additionalHeaders: ['authorization'],
  //       additionalExposedHeaders: ['authorization']
  //       //additionalHeaders: ['*'],
  //       //additionalExposedHeaders: ['*']
  //     },
  //     validate: {
  //       failAction: failActionJoi
  //     }
  //   }
  // });

  const server1 = new Hapi.Server({
    host: 'localhost',
    port: 80,
    routes: {
      cors: {
        origin: ['*'],
        // additionalHeaders: ['authorization'],
        // additionalExposedHeaders: ['authorization']
        additionalHeaders: ['*'],
        additionalExposedHeaders: ['*']
      },
      validate: {
        failAction: failActionJoi
      }
    }
  });

  // await server.register(plugins);
  await server1.register(plugins);

  try {
    // await server.start();
    await server1.start();
  } catch (err) {
    logger.info(`Error while starting server: ${err.message}`);
  }

  logger.info(`+++ Server running at: ${server1.info.uri}`);
};

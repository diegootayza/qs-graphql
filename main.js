import 'babel-polyfill';
import 'babel-core/register';
import configureDatabase from './db';
import configureServer from './server';

configureServer();
configureDatabase();

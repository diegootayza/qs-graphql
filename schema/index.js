import { makeExecutableSchema } from 'graphql-tools';
import { mergeModules } from 'graphql-schema-modules';

// **** Custom Scalar
import * as date from './gql/date';
/*import * as json from './gql/json';
// **** Schema
import * as hello from './gql/hello';
import * as book from './gql/book';
import * as indiecore from './gql/indiecore';
import * as user from './gql/user';*/
import * as weekly_data from './gql/weekly_data';
import * as recomendation from './gql/recomendation';
import * as dollar from './gql/dollar';
import * as configuration from './gql/configuration';
import * as meaning_type from './gql/meaning_type';
import * as primera from './gql/primera';
import * as matutina from './gql/matutina';
import * as vespertina from './gql/vespertina';
import * as nocturna from './gql/nocturna';
import * as ephemerides from './gql/ephemerides';
import * as poceada from './gql/poceada';
import * as poceada_plus from './gql/poceada_plus';
import * as brinco from './gql/brinco';
import * as loto from './gql/loto';
import * as quini6 from './gql/quini6';
import * as schedule_draw from './gql/schedule_draw';

const { typeDefs, resolvers } = mergeModules([
  date,
  //json,
  //hello,
  //book,
  //indiecore,
  //user,
  weekly_data,
  recomendation,
  dollar,
  configuration,
  meaning_type,
  primera,
  matutina,
  vespertina,
  nocturna,
  ephemerides,
  poceada,
  poceada_plus,
  brinco,
  loto,
  quini6,
  schedule_draw
]);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

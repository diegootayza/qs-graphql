import { getMatutinaResults, getMatutinaResultsModified } from '../../controllers/matutina';
import pubsub from '../../utilities/subscriptions';

const MATUTINA_MODIFIED = 'matutina_modified';

export const typeDefs = `
        type NumberDetail{
            number:Int
            value:String
        }
        type Matutina {
          id:String
          city: String
          value: String
          id_loteria: String
          id_draw: String
          date: Date
          meaning: String
          meaning_image: String
          meaning_number: String
          numbers:[NumberDetail]
        }
        type Query {
          matutina(ids:String,date:String):[Matutina]
          matutina_modified(ids:String):[Matutina]
        }
        type Subscription{
            matutina_modified:[Matutina]
        }
`;

export const resolvers = {
  Query: {
    matutina(root, payload, context) {
      return getMatutinaResults(root, payload, context);
    },
    matutina_modified(root, payload, context) {
      let results = getMatutinaResultsModified(root, payload, context);
      pubsub.publish(MATUTINA_MODIFIED, results);
      return results;
    }
  },
  Subscription: {
    matutina_modified: {
      resolve: (payload, args, context, info) => {
        return payload;
      },
      subscribe: () => pubsub.asyncIterator(MATUTINA_MODIFIED)
    }
  }
};

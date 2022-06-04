import { getPrimeraResults, getPrimeraResultsModified } from '../../controllers/primera';
import pubsub from '../../utilities/subscriptions';

const PRIMERA_MODIFIED = 'primera_modified';

export const typeDefs = `
        type NumberDetail{
            number:Int
            value:String
        }
        type Primera {
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
          primera(ids:String,date:String):[Primera]
          primera_modified(ids:String):[Primera]
        }
        type Subscription{
            primera_modified:[Primera]
        }
        
`;

export const resolvers = {
  Query: {
    primera(root, payload, context) {
      return getPrimeraResults(root, payload, context);
    },
    primera_modified(root, payload, context) {
      let results = getPrimeraResultsModified(root, payload, context);
      pubsub.publish(PRIMERA_MODIFIED, results);
      return results;
    }
  },
  Subscription: {
    primera_modified: {
      resolve: (payload, args, context, info) => {
        return payload;
      },
      subscribe: () => pubsub.asyncIterator(PRIMERA_MODIFIED)
    }
  }
};

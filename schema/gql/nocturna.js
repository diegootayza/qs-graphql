import { getNocturnaResults, getNocturnaResultsModified } from '../../controllers/nocturna';
import pubsub from '../../utilities/subscriptions';

const NOCTURNA_MODIFIED = 'nocturna_modified';
export const typeDefs = `
        type NumberDetail{
            number:Int
            value:String
        }
        type Nocturna {
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
          nocturna(ids:String,date:String):[Nocturna]
          nocturna_modified(ids:String):[Nocturna]
        }
        type Subscription{
            nocturna_modified:[Nocturna]
        }
`;

export const resolvers = {
  Query: {
    nocturna(root, payload, context) {
      return getNocturnaResults(root, payload, context);
    },
    nocturna_modified(root, payload, context) {
      let results = getNocturnaResultsModified(root, payload, context);
      pubsub.publish(NOCTURNA_MODIFIED, results);
      return results;
    }
  },
  Subscription: {
    nocturna_modified: {
      resolve: (payload, args, context, info) => {
        return payload;
      },
      subscribe: () => pubsub.asyncIterator(NOCTURNA_MODIFIED)
    }
  }
};

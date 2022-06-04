import { getVespertinaResults, getVespertinaResultsModified } from '../../controllers/vespertina';
import pubsub from '../../utilities/subscriptions';

const VESPERTINA_MODIFIED = 'vespertina_modified';
export const typeDefs = `
        type NumberDetail{
            number:Int
            value:String
        }
        type Vespertina {
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
          vespertina(ids:String,date:String):[Vespertina]
          vespertina_modified(ids:String):[Vespertina]
        }
        type Subscription{
            vespertina_modified:[Vespertina]
        }
`;

export const resolvers = {
  Query: {
    vespertina(root, payload, context) {
      return getVespertinaResults(root, payload, context);
    },
    vespertina_modified(root, payload, context) {
      let results = getVespertinaResultsModified(root, payload, context);
      pubsub.publish(VESPERTINA_MODIFIED, results);
      return results;
    }
  },
  Subscription: {
    vespertina_modified: {
      resolve: (payload, args, context, info) => {
        return payload;
      },
      subscribe: () => pubsub.asyncIterator(VESPERTINA_MODIFIED)
    }
  }
};

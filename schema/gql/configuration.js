import { getConfigurationData } from '../../controllers/configuration';
import pubsub from '../../utilities/subscriptions';

const CONFIGURATION_CHANGED = 'configuration_changed';
export const typeDefs = `
        type Configuration {
          showNumbers: String
          showEphemerides: String
          showRecomendations: String
          blink: String
          blink_message: String
          date:Date
          current_date:Date
        }
        type Query {
          configuration:Configuration
          configuration_changed:Configuration
        }
        type Subscription{
            configuration_changed:Configuration
        }
`;

export const resolvers = {
  Query: {
    configuration(root, payload, context) {
      return getConfigurationData();
    },
    configuration_changed(root, payload, context) {
      let results = getConfigurationData();
      pubsub.publish(CONFIGURATION_CHANGED, results);
      return results;
    }
  },
  Subscription: {
    configuration_changed: {
      resolve: (payload, args, context, info) => {
        return payload;
      },
      subscribe: () => pubsub.asyncIterator(CONFIGURATION_CHANGED)
    }
  }
};

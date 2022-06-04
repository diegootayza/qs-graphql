import { getEphemeridesDataResults } from '../../controllers/ephemerides';

export const typeDefs = `
        type Ephemerides {
          number: String
          image: String
          description: String
        }
        type Query {
          ephemerides:[Ephemerides]
        }
`;

export const resolvers = {
  Query: {
    ephemerides(root, payload, context) {
      return getEphemeridesDataResults();
    }
  }
};

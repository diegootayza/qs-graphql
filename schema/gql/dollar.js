import { getDollarValue } from '../../controllers/dollar';

export const typeDefs = `
        type Dollar {
          buy: String
          sell: String
        }
        type Query {
          dollar:Dollar
        }
`;

export const resolvers = {
  Query: {
    dollar(root, payload, context) {
      return getDollarValue();
    }
  }
};

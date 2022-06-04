import { getBrincoResults, getBrincoLimitResults } from '../../controllers/brinco';

export const typeDefs = `
        type Prize{
            hits:String
            winners:String
            prize:String
        }
        type Brinco {
          date: Date
          draw_number: String
          numbers: [String]
          prizes: [Prize]
          next_prize:String
        }
        type Query {
          brinco:[Brinco]
          brinco_limit(limit:Int):[Brinco]
        }
`;

export const resolvers = {
  Query: {
    brinco(root, payload, context) {
      return getBrincoResults(root, payload, context);
    },
    brinco_limit(root, payload, context) {
      return getBrincoLimitResults(root, payload, context);
    }
  }
};

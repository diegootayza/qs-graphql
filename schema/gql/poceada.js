import { getPoceadaResults, getPoceadaLimitResults } from '../../controllers/poceada';

export const typeDefs = `
        type Prize{
            hits:String
            winners:String
            prize:String
        }
        type Poceada {
          date: Date
          draw_number: String
          numbers: [String]
          prizes: [Prize]
        }
        type Query {
          poceada:[Poceada]
          poceada_limit(limit:Int):[Poceada]
        }
`;

export const resolvers = {
  Query: {
    poceada(root, payload, context) {
      return getPoceadaResults(root, payload, context);
    },
    poceada_limit(root, payload, context) {
      return getPoceadaLimitResults(root, payload, context);
    }
  }
};

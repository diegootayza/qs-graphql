import { getPoceadaPlusResults, getPoceadaPlusLimitResults } from '../../controllers/poceada_plus';

export const typeDefs = `
        type Prize{
            hits:String
            winners:String
            prize:String
        }
        type PoceadaPlus {
          date: Date
          draw_number: String
          numbers: [String]
          prizes: [Prize]
        }
        type Query {
          poceada_plus:[PoceadaPlus]
          poceada_plus_limit(limit:Int):[PoceadaPlus]
        }
`;

export const resolvers = {
  Query: {
    poceada_plus(root, payload, context) {
      return getPoceadaPlusResults(root, payload, context);
    },
    poceada_plus_limit(root, payload, context) {
      return getPoceadaPlusLimitResults(root, payload, context);
    }
  }
};

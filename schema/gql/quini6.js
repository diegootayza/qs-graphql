import { getQuini6Results, getQuini6LimitResults } from '../../controllers/quini6';

export const typeDefs = `
        type PrizeQuini6{
            hits:String
            winners:String
            prize:String
        }
        type PrizeRevanchaQuini6{
            winners: String
            prize: String
        }
        type Quini6 {
            date: Date
            draw_number: String
            tradicional_numbers: [String]
            tradicional_prizes: [PrizeQuini6]
            segunda_vuelta_numbers: [String]
            segunda_vuelta_prizes: [PrizeQuini6]
            revancha_numbers: [String]
            revancha_prizes: PrizeRevanchaQuini6
            siempre_sale_numbers: [String]
            siempre_sale_prizes: PrizeRevanchaQuini6
            premio_extra: String,
            premio_extra_prizes: PrizeQuini6
            prize_next_move: String
        }
        type Query {
          quini6:[Quini6]
          quini6_limit(limit:Int):[Quini6]
        }
`;

export const resolvers = {
  Query: {
    quini6(root, payload, context) {
      return getQuini6Results(root, payload, context);
    },
    quini6_limit(root, payload, context) {
      return getQuini6LimitResults(root, payload, context);
    }
  }
};

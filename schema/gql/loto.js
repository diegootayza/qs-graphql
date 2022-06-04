import { getLotoResults, getLotoLimitResults } from '../../controllers/loto';

export const typeDefs = `
        type PrizeLoto{
            label:String
            winners:String
            prize:String
        }
        type PrizeSaleSaleLoto{
            winners:String
            prize:String
        }
        type Loto {
            date: Date
            draw_number: String
            tradicional_numbers: [String]
            jackpot1_tradicional: String
            jackpot2_tradicional: String
            tradicional_prizes: [PrizeLoto]
            desquite_numbers: [String]
            jackpot1_desquite: String
            jackpot2_desquite: String
            desquite_prizes: [PrizeLoto]
            sale_sale_numbers: [String]
            jackpot1_sale_sale: String
            jackpot2_sale_sale: String
            jackpot3_sale_sale: String
            jackpot4_sale_sale: String
            sale_sale_prizes: PrizeSaleSaleLoto
            sale_sale_duplicador: String
            prize_next_move: String
        }
        type Query {
          loto:[Loto]
          loto_limit(limit:Int):[Loto]
        }
`;

export const resolvers = {
  Query: {
    loto(root, payload, context) {
      return getLotoResults(root, payload, context);
    },
    loto_limit(root, payload, context) {
      return getLotoLimitResults(root, payload, context);
    }
  }
};

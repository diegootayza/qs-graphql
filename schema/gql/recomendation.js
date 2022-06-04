import {
  getRecomendation,
  checkRecomendation,
  saveRecomendations
} from '../../controllers/recomendation';

export const typeDefs = `
        type Recomendation {
          id:String
          name: String
          image: String
          recomendation: String
          id_user: String
          is_facebook: String
          is_google: String
          date:Date
        }
        type Query {
          recomendation:[Recomendation]
          check_recomendations(id_user:String!):Int
        }
        type Mutation{
            save_recomendation(name:String,image:String,recomendation:String,date:String,id_user:String,is_facebook:String,is_google:String):Recomendation
        }
`;

export const resolvers = {
  Query: {
    recomendation(root, payload, context) {
      return getRecomendation();
    },
    check_recomendations(root, payload, context) {
      return checkRecomendation(payload);
    }
  },
  Mutation: {
    save_recomendation(root, payload, context) {
      return saveRecomendations(payload);
    }
  }
};

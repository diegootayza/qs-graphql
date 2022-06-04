import { getMeaningTypeResult, getMeaningTypesResult } from '../../controllers/meaning_type';

export const typeDefs = `
        type MeaningTypeDetail{
            image:String
            number:String
            meaning:String
        }
        type MeaningType {
          id:String
          name:String
          isName: Int
          position: String
          details: [MeaningTypeDetail]
        }
        type Query {
          meaning_types:[MeaningType] 
          meaning_type(id:String!):[MeaningType]
        }
`;

export const resolvers = {
  Query: {
    meaning_types(root, payload, context) {
      return getMeaningTypesResult();
    },
    meaning_type(root, payload, context) {
      return getMeaningTypeResult(payload);
    }
  }
};

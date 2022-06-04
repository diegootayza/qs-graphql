import { getWeeklyDataResults } from '../../controllers/weekly_data';

export const typeDefs = `
        type WeeklyData {
          _id: String
          number1: String
          number2: String
          number3: String
          number4: String
          number5: String
          number6: String
          date:Date
        }
        type Query {
          weekly:[WeeklyData]
        }
`;

export const resolvers = {
  Query: {
    weekly(root, payload, context) {
      return getWeeklyDataResults();
    }
  }
};

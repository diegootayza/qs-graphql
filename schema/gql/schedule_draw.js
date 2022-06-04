import { getScheduleDrawResults } from '../../controllers/schedule_draw';

export const typeDefs = `
        type ScheduleDraw{
            draw:String
            day:String
            hour:String
        }
        type Query {
          schedule_draw(draw:String,day:Int):[ScheduleDraw]
        }
`;

export const resolvers = {
  Query: {
    schedule_draw(root, payload, context) {
      return getScheduleDrawResults(root, payload, context);
    }
  }
};

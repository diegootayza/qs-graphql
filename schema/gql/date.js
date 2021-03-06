/* eslint-disable */

import { Kind } from 'graphql/language';
import isNumber from 'lodash/isNumber';

export const typeDefs = `
				scalar Date
                `;

export const scalarType = {
  description: 'Date custom scalar type',

  __parseValue(value) {
    //return new Date(value); // value from the client
    return value;
  },
  __serialize(value) {
    /*if (isNumber(value)) {
            return value;
        } else {
            return value.getTime(); // value sent to the client
        }*/
    return value;
  },
  __parseLiteral(ast) {
    /*switch (ast.kind) {
            case Kind.INT:
            case Kind.FLOAT:
                return new Date(parseFloat(ast.value));
            default:
                return null;
        }*/
    return new Date(parseFloat(ast.value));
  }
};

export const resolvers = {
  Date: scalarType
};

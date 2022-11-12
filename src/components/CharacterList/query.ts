import { gql } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";

export const CHARACTER_LIST = gql`
  query CharacterList {
    allPeople {
      people {
        name
        id
        height
        mass
        birthYear
        homeworld {
          name
        }
      }
    }
  }
`;

export type CharacterListQuery = {
  __typename?: "Query";
  allPeople?: Maybe<{
    people?: Maybe<
      Array<
        Maybe<{
          __typename?: "character";
          name?: Maybe<string>;
          id?: Maybe<string>;
          height?: Maybe<number>;
          mass?: Maybe<number>;
          birthYear?: Maybe<string>;
          homeworld?: Maybe<{
            __typename?: "homeworld";
            name?: Maybe<string>;
          }>
        }>
      >
    >;
  }>;
};
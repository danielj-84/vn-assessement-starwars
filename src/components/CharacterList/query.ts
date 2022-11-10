import { gql } from "@apollo/client";
// import { Maybe } from "graphql/jsutils/Maybe";

export const CHARACTER_LIST = gql`
  query CharacterList {
    allPeople {
      people {
        name
        id
      }
    }
  }
`;

// export type CharacterListQuery = {
//   __typename?: "Query";
//   allPeople?: Maybe<{
//     people?: Maybe<
//       Array<
//         Maybe<{
//           __typename?: "character";
//           name?: Maybe<string>;
//           id?: Maybe<string>;
//         }>
//       >
//     >;
//   }>;
// };
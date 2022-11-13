import { gql } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";
import { client } from "../../index";

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

// const CREATE_CHARACTER = gql`
//   mutation CreateCharacter($id: String!) {
//     addCharacter(id: $id) {
//       id
//       name
//       height
//       mass
//       birthYear
//       homeworld{
//         name
//       }
//     }
//   }
// `

// const create = client.writeFragment({
//   id: "s",
//   fragment: gql`
//     fragment 
//   `
// })

// export type CharacterListQuery = {
//   __typename?: "Query";
//   allPeople?: Maybe<{
//     people?: Maybe<
//       Array<
//         Maybe<{
//           __typename?: "character";
//           name?: Maybe<string>;
//           id?: Maybe<string>;
//           height?: Maybe<number>;
//           mass?: Maybe<number>;
//           birthYear?: Maybe<string>;
//           homeworld?: Maybe<{
//             __typename?: "homeworld";
//             name?: Maybe<string>;
//           }>
//         }>
//       >
//     >;
//   }>;
// };

// client.writeQuery({
//   query: gql`
//     query CreateCharacter($id: Int!) {
//       character(id: $id) {
//         id
//         name
//         height
//         mass
//         birthYear
//         homeworld {
//           name
//         }
//       }
//     }`,
//   data: { // Contains the data to write
//     character: {
//       __typename: 'character',
//       id: 99999,
//       name: "Daniel",
//       height: 150,
//       mass: 500,
//       birthYear: "500BBY",
//     },
//   },
//   variables: {
//     id: 99999
//   }
// });

export const DELETE_CHARACTER_MUTATION = gql`
  mutation DeleteCharacter($id: String!) {
    delete_character(id: $id) {
        id
    }
  }
`;
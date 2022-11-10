import { gql } from "@apollo/client";

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
import { gql } from '@apollo/client';

export const CHARACTER_PROFILE = gql`
query CharacterProfile($id: ID) {
    person(personID: $id) {
      id
      name
      height
      mass
      birthYear
      homeworld {
        name
      }
    }
  }
`;
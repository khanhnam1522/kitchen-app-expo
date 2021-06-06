import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($data: UserProfileInput!) {
    login(data: $data) {
      errors {
        field
        message
      }
      user {
        id
        email
      }
      accessToken
    }
  }
`;

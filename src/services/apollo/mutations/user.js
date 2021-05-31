import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($data: UserProfileInput!) {
    login(options: $data) {
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

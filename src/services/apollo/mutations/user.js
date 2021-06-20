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

export const REGISTER = gql`
  mutation register($data: UserProfileInput!) {
    register(data: $data) {
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

export const SEND_VERIFICATION_CODE = gql`
  mutation sendVerificationCode($data: SendEmailVerificationInput!) {
    sendVerificationCode(data: $data)
  }
`;

import { createUploadLink } from "apollo-upload-client";

const getServerURL = () => {
  const SERVER_URL = "http://192.168.0.112:4000/graphql";
  console.log("SERVER_URL: =", SERVER_URL);
  return SERVER_URL;
};

export const httpMiddleware = new createUploadLink({
  uri: getServerURL(),
});

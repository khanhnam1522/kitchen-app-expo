import { createUploadLink } from "apollo-upload-client";
import { API_URL } from "@env";

const getServerURL = () => {
  const SERVER_URL = API_URL;
  console.log("SERVER_URL: =", SERVER_URL);
  return SERVER_URL;
};

export const httpMiddleware = new createUploadLink({
  uri: getServerURL(),
});

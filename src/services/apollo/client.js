import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "apollo-link";
import { httpMiddleware } from "./middleware/request";
import { errorMiddleware } from "./middleware/error";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache({}),
  link: ApolloLink.from([errorMiddleware, httpMiddleware]),
});

export default client;

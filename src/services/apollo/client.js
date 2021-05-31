import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache({}),
  uri: "http://192.168.0.111:4000/graphql", // Need to add middlewares
});

export default client;

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache({}),
  uri: "http://10.0.0.198:4000/graphql", // Need to add middlewares
});

export default client;

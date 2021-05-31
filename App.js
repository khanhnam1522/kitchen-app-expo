import React from "react";
import { ApolloProvider } from "@apollo/client";

import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import client from "apolloClient";
import * as Screen from "./src/containers";

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        {/* <Provider> */}
        <Screen.Login />
        {/* </Provider> */}
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

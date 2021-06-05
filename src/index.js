import React from "react";
import { ApolloProvider } from "@apollo/client";
import store from "store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getPersistor, PersistGate } from "./plugins/persist";
import { Connection } from "components";
import { Provider } from "react-redux";
import client from "apolloClient";
import * as Screen from "./containers";

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <PersistGate persistor={getPersistor()}>
          <Provider store={store}>
            <Connection>
              <Screen.Login />
            </Connection>
          </Provider>
        </PersistGate>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

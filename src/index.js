import React from "react";
import { ApolloProvider } from "@apollo/client";
import store from "store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getPersistor, PersistGate } from "./plugins/persist";
import { Connection } from "components";
import { Provider } from "react-redux";
import Routes from "./routes";
import client from "apolloClient";

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <PersistGate persistor={getPersistor()}>
          <Provider store={store}>
            <Connection>
              <Routes />
            </Connection>
          </Provider>
        </PersistGate>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

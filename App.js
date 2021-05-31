import React from "react";
import ApolloClient from "apollo-client";

import { ApolloProvider } from "react-apollo";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function App() {
  // const client = new ApolloClient({
  //   connectToDevTools: true,
  // });
  return (
    <SafeAreaProvider>
      {/* <ApolloProvider client={client}> */}
      {/* <Provider> */}
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      {/* </Provider> */}
      {/* </ApolloProvider> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

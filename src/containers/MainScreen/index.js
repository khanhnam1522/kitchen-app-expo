import React from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import { Text } from "components";

const MainScreen = ({ logout }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Main Screen App</Text>
      <Button onPress={() => logout()} title="Log Out" />
    </View>
  );
};

const mapDispatch = ({ auth }) => ({
  logout: () => auth.logout(),
});

export default connect(null, mapDispatch)(MainScreen);

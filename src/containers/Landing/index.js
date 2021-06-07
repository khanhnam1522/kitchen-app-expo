import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import Constants from "expo-constants";
import { getItem } from "secureStore";
import * as navigation from "navigation";

const { statusBarHeight } = Constants;

const Landing = () => {
  const isToken = async () => {
    const accessToken = await getItem("accessToken");
    if (accessToken) {
      navigation.reset("MainScreen");
    } else {
      navigation.reset("Login");
    }
  };

  useEffect(() => {
    isToken();
  });

  return (
    <View
      style={{
        marginTop: statusBarHeight + 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#999999" />
    </View>
  );
};

export default Landing;

import React from "react";
import { Animated, Easing } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Screen from "./containers";
import { navigationRef } from "navigation";

const fadeInTransition = () => ({
  transitionSpec: {
    duration: 300,
    easing: Easing.inOut(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: (sceneProps) => {
    const { position, scene } = sceneProps;
    const { index } = scene;

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 2],
    });
    return { opacity };
  },
});

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Landing"
        headerMode="none"
        mode="modal"
        screenOptions={{
          gestureEnabled: false,
          transitionConfig: fadeInTransition,
        }}
      >
        <Stack.Screen name="Landing" component={Screen.Landing} />
        <Stack.Screen name="Login" component={Screen.Login} />
        <Stack.Screen name="MainScreen" component={Screen.MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

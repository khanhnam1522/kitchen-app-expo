import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'navigation';
import * as Screen from './containers';

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

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="Home" component={Screen.Home} />
		<Tab.Screen name="Settings" component={Screen.Settings} />
		<Tab.Screen name="Notifications" component={Screen.Notifications} />
	</Tab.Navigator>
);

const MainStackNavigator = () => (
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
		<Stack.Screen name="Register" component={Screen.Register} />
		<Stack.Screen name="EmailSubmission" component={Screen.EmailSubmission} />
		<Stack.Screen name="Verification" component={Screen.Verification} />
		<Stack.Screen name="NewPassword" component={Screen.NewPassword} />
		<Stack.Screen name="App" component={BottomTabNavigator} />
	</Stack.Navigator>
);

const Routes = () => (
	<NavigationContainer ref={navigationRef}>
		<MainStackNavigator />
	</NavigationContainer>
);

export default Routes;

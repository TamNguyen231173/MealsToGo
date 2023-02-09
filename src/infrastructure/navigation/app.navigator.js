import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/setting.screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "restaurant-sharp",
	Restaurants_o: "restaurant-outline",
	Settings: "settings-sharp",
	Settings_o: "settings-outline",
	Map: "map-sharp",
	Map_o: "map-outline",
};

const createScreenOptions = ({ route }) => {
	return {
		headerShown: false,
		tabBarIcon: ({ focused, size, color }) => {
			let iconName = focused
				? TAB_ICON[route.name]
				: TAB_ICON[route.name + "_o"];

			return <Ionicons name={iconName} size={size} color={color} />;
		},
	};
};

export const AppNavigator = () => (
	<NavigationContainer>
		<Tab.Navigator
			screenOptions={createScreenOptions}
			tabBarOptions={{
				activeTintColor: "tomato",
				inactiveTintColor: "gray",
			}}
		>
			<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
			<Tab.Screen name="Map" component={MapScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);

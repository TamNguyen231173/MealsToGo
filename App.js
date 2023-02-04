import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurents/screens/restaurent.screen";
import { SettingsScreen } from "./src/features/settings/screens/setting.screen";
import { MapScreen } from "./src/features/map/screens/map.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurents: "restaurant-sharp",
	Restaurents_o: "restaurant-outline",
	Settings: "settings-sharp",
	Settings_o: "settings-outline",
	Map: "map-sharp",
	Map_o: "map-outline",
};

const createScreenOptions = ({ route }) => {
	return {
		tabBarIcon: ({ focused, size, color }) => {
			let iconName = focused
				? TAB_ICON[route.name]
				: TAB_ICON[route.name + "_o"];

			return <Ionicons name={iconName} size={size} color={color} />;
		},
	};
};

export default function App() {
	const [oswaldLoaded] = useOswald({ Oswald_400Regular });

	const [latoLoaded] = useLato({ Lato_400Regular });

	if (!oswaldLoaded || !latoLoaded) return null;

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={createScreenOptions}
						tabBarOptions={{
							activeTintColor: "tomato",
							inactiveTintColor: "gray",
						}}
					>
						<Tab.Screen
							name="Restaurents"
							component={RestaurantsScreen}
						/>
						<Tab.Screen name="Map" component={MapScreen} />
						<Tab.Screen
							name="Settings"
							component={SettingsScreen}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}

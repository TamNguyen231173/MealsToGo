import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.View`
	flex: 1;
`;

export const RestaurantDetailScreen = ({ route }) => {
	const { restaurant } = route.params;

	const [expandedBreakfast, setExpandedBreakfast] = React.useState(false);
	const [expandedLunch, setExpandedLunch] = React.useState(false);
	const [expandedDinner, setExpandedDinner] = React.useState(false);
	const [expandedDrinks, setExpandedDrinks] = React.useState(false);

	const handlePressBreakfast = () => setExpandedBreakfast(!expandedBreakfast);
	const handlePressLunch = () => setExpandedLunch(!expandedLunch);
	const handlePressDinner = () => setExpandedDinner(!expandedDinner);
	const handlePressDrinks = () => setExpandedDrinks(!expandedDrinks);

	return (
		<Container>
			<RestaurantInfoCard restaurant={restaurant} />
			<ScrollView>
				<List.Section>
					<List.Accordion
						title="Breakfast"
						left={(props) => (
							<List.Icon {...props} icon="bread-slice-outline" />
						)}
						expanded={expandedBreakfast}
						onPress={handlePressBreakfast}
					>
						<List.Item title="Eggs Benedict" />
						<List.Item title="Classic Breakfast" />
					</List.Accordion>

					<List.Accordion
						title="Lunch"
						left={(props) => (
							<List.Icon {...props} icon="hamburger" />
						)}
						expanded={expandedLunch}
						onPress={handlePressLunch}
					>
						<List.Item title="Burger w/ Fries" />
						<List.Item title="Steak Sandwich" />
						<List.Item title="Mushroom Soup" />
					</List.Accordion>

					<List.Accordion
						title="Dinner"
						left={(props) => (
							<List.Icon {...props} icon="food-variant" />
						)}
						expanded={expandedDinner}
						onPress={handlePressDinner}
					>
						<List.Item title="Spaghetti Bolognese" />
						<List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
						<List.Item title="Steak Frites" />
					</List.Accordion>

					<List.Accordion
						title="Drinks"
						left={(props) => (
							<List.Icon {...props} icon="coffee-outline" />
						)}
						expanded={expandedDrinks}
						onPress={handlePressDrinks}
					>
						<List.Item title="First item" />
						<List.Item title="Second item" />
						<List.Item title="Coffee" />
						<List.Item title="Tea" />
						<List.Item title="Modelo" />
						<List.Item title="Coke" />
						<List.Item title="Fanta" />
					</List.Accordion>
				</List.Section>
			</ScrollView>
		</Container>
	);
};

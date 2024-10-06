import ListingsScreen from "../app/screens/ListingsScreen";
import ListingDetailsScreen from "../app/screens/ListingDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen
      name="ListingsScreen"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetailsScreen"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

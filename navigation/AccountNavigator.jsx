import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../app/screens/AccountScreen";
import MessagesScreen from "../app/screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{ headerShown: false, headerTitle: "Account" }}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;

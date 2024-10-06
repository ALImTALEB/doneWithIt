import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../app/config/colors";
import ListingEditScreen from "../app/screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const MainAppNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "white",
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.medium,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ListingEditScreen")}
            style={styles.button}
          >
            <MaterialCommunityIcons
              name="plus-circle"
              size={40}
              color="white"
            />
          </TouchableOpacity>
        ),
        headerShown: false,
      })}
    />

    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    borderRadius: 50,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 10,
  },
});

export default MainAppNavigation;

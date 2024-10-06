import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import AppNavigator from "./navigation/AppNavigator";
import { useNetInfo } from "@react-native-community/netinfo";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./navigation/AuthNavigator";

export default function App() {
  const netInfo = useNetInfo();
  console.log(netInfo);

  return (
    <>
      <OfflineNotice />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {/* <AppNavigator /> */}
          <AuthNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}

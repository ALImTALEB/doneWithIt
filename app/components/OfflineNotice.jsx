import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && !netInfo.isInternetReachable)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    position: "absolute",
    zIndex: 1,
    top: Constants.statusBarHeight,
  },
  text: {
    color: "white",
  },
});

export default OfflineNotice;

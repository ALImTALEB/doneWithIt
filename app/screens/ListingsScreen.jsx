import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import Card from "../components/Card";
import useApi from "../hooks/useApi";
import { getListings } from "../api/listings";
import { useEffect } from "react";

function ListingsScreen() {
  const navigation = useNavigation();

  const {
    request: loadListings,
    data: listings,
    loading,
    error,
  } = useApi(getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>couldnt retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <View style={styles.loader}>
        <ActivityIndicator
          animating={loading}
          size="large"
          color={colors.primary}
        />
        {/* <LottieView
        autoPlay
        loop={loading}
        source={require("../assets/animations/loader.json")}
        style={styles.animation}
      /> */}
      </View>

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("ListingDetailsScreen", { item })
            }
          >
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          </Pressable>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListingsScreen;

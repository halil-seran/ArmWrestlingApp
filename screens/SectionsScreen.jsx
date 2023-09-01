import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import * as data from "../data/Data.json";
import { SectionsCard } from "../components/SectionsCard";
import { useState } from "react";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
  RewardedInterstitialAd,
  RewardedAdEventType,
} from "react-native-google-mobile-ads";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const SectionsScreen = () => {
  const [loading, setLoading] = useState(false);

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "";

  // const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  //   requestNonPersonalizedAdsOnly: true,
  //   keywords: ["fashion", "clothing"],
  // });

  // appOpenAd.load();

  // appOpenAd.show();
  const newSize = `${Math.round(windowWidth)}x${Math.round(windowWidth / 3.2)}`;

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <View style={styles.screen}>
            <View style={{ marginTop: 30 }}></View>
            {/* spacer koydum eger status bugi duzelmesse diye */}
            <FlatList
              data={data.sections}
              renderItem={({ item }) => <SectionsCard item={item} />}
              keyExtractor={(item) => item.slug}
            />
          </View>
          <View style={styles.AdsArea}>
            <BannerAd
              unitId={adUnitId}
              size={newSize}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AdsArea: {
    backgroundColor: "#F5B700",
    width: "100%",

    height: windowWidth / 3.2,

    marginTop: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  screen: { flex: 1 },
});

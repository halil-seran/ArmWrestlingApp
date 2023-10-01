import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import {
  BannerAd,
  TestIds,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8713168739861819~9392609672";

const adUnitId2 = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-8713168739861819~9392609672";

const newSize = `${Math.round(windowWidth)}x${Math.round(windowWidth / 3.2)}`;

const interstitial = InterstitialAd.createForAdRequest(adUnitId2, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});

export const SettingsScreen = () => {
  const [loading, setLoading] = useState(false);
  //bu aktiviy indicator icin
  const [loaded, setLoaded] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);

  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log("delete + set time remain to 320 " + timeRemaining);
  //   setTimeout(() => {
  //     timeRemaining > 0 && setTimeRemaining((time) => time - 1);
  //   }, 1000);
  //   if (timeRemaining < 1) {
  //     interstitial.show();
  //   }
  // }, [timeRemaining]);

  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(
  //     AdEventType.LOADED,
  //     () => {
  //       setLoaded(true);
  //     }
  //   );
  //   interstitial.load();
  //   return unsubscribe;
  // }, []);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Pressable style={styles.linesArea}>
          <Text style={styles.buttonText}>Languages (comingSoon)</Text>
        </Pressable>
        <Pressable style={styles.linesArea}>
          <Text style={styles.buttonText}>Invite Friends</Text>
        </Pressable>
        <Pressable
          style={styles.linesArea}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </Pressable>
        <Pressable style={styles.linesArea}>
          <Text style={styles.buttonText}>Report a bug</Text>
        </Pressable>
        <Pressable style={styles.linesArea}>
          <Text style={styles.buttonText}>App Version:1.0 </Text>
        </Pressable>
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
    marginTop: 30,
  },
  screen: {
    flex: 1,
  },
  linesArea: {
    elevation: 10,
    backgroundColor: "white",
    width: "100%",
    height: 50,
    marginTop: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 23,
  },
});

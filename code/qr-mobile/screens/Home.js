import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.infoView}>
        <Text style={styles.textTitle}>Hello!</Text>
        <Text style={styles.subTitle}>
          Thank you for downloading this project.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.buttonText}>Start scanning</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2E",
  },
  infoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    color: "#E6E6E8",
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },
  subTitle: {
    color: "#A2A2A7",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 2,
    backgroundColor: "#2A2A3B",
  },
  buttonText: {
    color: "#E6E6E8",
  },
});

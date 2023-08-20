import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as Fonts from "expo-font";
import { SplashScreen, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "tamagui";
import { TamaguiProvider } from "tamagui";

import appConfig from "../tamagui-config";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [{ loaded: fontsLoaded, error: fontError }, setFontState] = useState({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    Fonts.loadAsync({
      Inter: Inter_400Regular,
      InterBold: Inter_700Bold,
    })
      .then(() => {
        setFontState({ loaded: true, error: false });
      })
      .catch((err) => {
        console.error(err);
        setFontState({ loaded: false, error: true });
      });
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  if (fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <TamaguiProvider config={appConfig}>
          <Theme name="dark">
            <StatusBar style="light" />
            <Slot />
          </Theme>
        </TamaguiProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

<<<<<<< HEAD
import { Colors, CustomNavigationTheme } from "@/constants";
import { ModalProvider } from "@/context";
import { AuthProvider } from "@/context/AuthContext";
import { AppNavigation } from "@/navigation";
import { ThemeProvider } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { I18nManager, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToastManager from "toastify-react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export const RootLayout = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync(Colors.white);
      NavigationBar.setButtonStyleAsync("dark");
    }
  }, []);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <ThemeProvider value={CustomNavigationTheme}>
        <AuthProvider>
          <ModalProvider>
            <AppNavigation />
          </ModalProvider>
        </AuthProvider>
        <StatusBar style="dark" />
      </ThemeProvider>

      <ToastManager />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootLayout;
=======
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
>>>>>>> 800aef6e220ee29b0328d265321e1b681f20ac5a

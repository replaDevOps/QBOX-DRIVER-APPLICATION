import { Colors, CustomNavigationTheme } from "@/constants";
import { ModalProvider } from "@/context";
import { AuthProvider } from "@/context/AuthContext";
import { AppNavigation } from "@/navigation";
import { ThemeProvider } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToastManager from "toastify-react-native";

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

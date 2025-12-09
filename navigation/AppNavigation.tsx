import { useAuth } from "@/hooks";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // ← important

SplashScreen.preventAutoHideAsync();

export const AppNavigation = () => {
  const { isLoading, userToken } = useAuth();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //   }}
    //   edges={["top", "left", "right"]}
    // >
    //   <StatusBar style="dark" backgroundColor={Colors.white} />

    <Stack>
      <Stack.Protected guard={Boolean(userToken)}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!Boolean(userToken)}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
    // </SafeAreaView>
  );
};

export default AppNavigation;

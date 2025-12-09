import { Colors } from "@/constants";
import { Stack } from "expo-router";

export default function ProfileStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: Colors.gray,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Profile", headerShown: false }}
      />
    </Stack>
  );
}

import { Colors } from "@/constants";
import { Stack } from "expo-router";

export default function DeliveryStack() {
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
        options={{ title: "Delivery", headerShown: false }}
      />
    </Stack>
  );
}

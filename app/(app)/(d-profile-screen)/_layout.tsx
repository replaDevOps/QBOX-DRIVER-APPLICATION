import { AppHeaderLeft, ProfileHeader } from "@/components";
import { ProfileProvider } from "@/context";
import { Stack } from "expo-router";

export default function ProfileStack() {
  return (
    <ProfileProvider>
      <Stack
        screenOptions={{
          headerLeft: () => <AppHeaderLeft canGoBack={true} />,
          headerShadowVisible: false,
          headerTitleAlign: "left",
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Profile", headerShown: false }}
        />
        <Stack.Screen
          name="passwordManager"
          options={{
            title: "Password",
            headerRight: () => {
              return <ProfileHeader />;
            },
          }}
        />
        <Stack.Screen
          name="appLanguage"
          options={{
            title: "Language",
            headerRight: () => {
              return <ProfileHeader />;
            },
          }}
        />
      </Stack>
    </ProfileProvider>
  );
}

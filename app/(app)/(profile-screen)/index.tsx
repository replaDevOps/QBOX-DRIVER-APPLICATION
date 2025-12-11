import { MenuList, ProfileCard, Text } from "@/components";
import { MENU_ITEM } from "@/constants";
import { mvs } from "@/utils/metrices";
import React from "react";
import { ScrollView, View } from "react-native";

export const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: mvs(20),
          paddingBottom: mvs(40),
        }}
      >
        <ProfileCard
          name="Ibrahim Ali"
          email="ibrahim@gmail.com"
          phone="+966 54 678 6543"
        />

        <MenuList menuData={MENU_ITEM} />
      </ScrollView>

      {/* Fixed bottom footer */}
      <View style={{ alignItems: "center", paddingVertical: mvs(10) }}>
        <Text variant="secondary" size="xs">
          Developed and Maintained by REPLA Technologies PVT Ltd
        </Text>
      </View>
    </View>
  );
};

export default Profile;

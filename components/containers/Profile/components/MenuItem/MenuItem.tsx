import { Card, Text } from "@/components";
import { Colors } from "@/constants";
import { mvs } from "@/utils/metrices";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { MenuItemProps } from "./props";

export const MenuItem = ({
  title,
  path,
  backgroundColor,
  textColor,
  rightText,
  rightTextColor,
  onPress,
  icon,
}: MenuItemProps) => {
  const Icon = icon;

  return (
    <Card
      variant="outlined"
      style={{ marginTop: mvs(10), width: "100%" }}
      backgroundColor={backgroundColor || Colors.gray}
      contentStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onPress={path ? () => router.navigate(path) : onPress}
    >
      <View style={{ flexDirection: "row", gap: mvs(10) }}>
        {Icon && <Icon size={24} />}
        <Text style={{ color: textColor || Colors.text }}>{title}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: mvs(10) }}>
        {rightText && (
          <Text variant="secondary" style={{ color: rightTextColor }}>
            {rightText}
          </Text>
        )}
        {path && <Ionicons name="chevron-forward" size={24} />}
      </View>
    </Card>
  );
};

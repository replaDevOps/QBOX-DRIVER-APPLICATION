import { Text } from "@/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface EmptyListProps {
  title?: string;
  image?: any;
  marginTop?: number;
}

export const EmptyList = ({
  title = "Items",
  image = require("@/assets/images/empty.png"),
  marginTop = 40,
}: EmptyListProps) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <Image source={image} style={styles.image} />
      <Text size="sm" variant="secondary">
        No {title} Yet
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
});

export default EmptyList;

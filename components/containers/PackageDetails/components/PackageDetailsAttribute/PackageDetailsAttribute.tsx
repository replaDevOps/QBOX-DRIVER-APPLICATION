import { AttributeView, Text } from "@/components";
import { Colors } from "@/constants";
import React from "react";
import { View } from "react-native";
import { PackageDetailsAttributeProps } from "./props";
import { styles } from "./style";

export const PackageDetailsAttribute = ({
  attributes,
}: PackageDetailsAttributeProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text bold color={Colors.dark}>
        What inside
      </Text>
      <View style={styles.attributeContainer}>
        {attributes.map((attr, index) => (
          <AttributeView
            key={`${attr.type}-${index}`}
            item={{
              id: index.toString(),
              icon: attr.icon,
              title: attr.type,
              value: attr.value,
            }}
            style={{ backgroundColor: Colors.darkGray }}
          />
        ))}
      </View>
    </View>
  );
};

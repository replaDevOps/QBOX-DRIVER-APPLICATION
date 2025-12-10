import { SegmentedControl } from "@/components";
import { PACKAGE_TYPE, PACKAGES_OPTIONS, Spacing } from "@/constants";
import { mvs } from "@/utils/metrices";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const Delivery = () => {
  const [selectedPackageType, setSelectedPackageType] = useState<string>(
    PACKAGE_TYPE.PENDING
  );

  const handleDeliveriesProviderChange = (option: string) => {
    setSelectedPackageType(option);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: mvs(20) }}>
      <SegmentedControl
        options={PACKAGES_OPTIONS}
        style={{ marginVertical: Spacing.md, width: "100%" }}
        onChange={handleDeliveriesProviderChange}
        value={selectedPackageType}
      />
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});

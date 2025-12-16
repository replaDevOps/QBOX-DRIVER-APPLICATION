import { PackagesList, SegmentedControl } from "@/components";
import {
  PACKAGE_TYPE,
  PENDING_DELIVERIES,
  Spacing,
  UPCOMING_DELIVERIES,
} from "@/constants";
import { mvs } from "@/utils/metrices";
import React, { useState } from "react";
import { View } from "react-native";

const Delivery = () => {
  const [selectedDeliveryType, setSelectedDeliveryType] = useState<string>(
    PACKAGE_TYPE.PENDING
  );

  const options = [
    { label: "Pending", value: "pending" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const handleDeliveriesProviderChange = (option: string) => {
    setSelectedDeliveryType(option);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: mvs(20) }}>
      <SegmentedControl
        options={options}
        style={{ marginVertical: Spacing.md, width: "100%" }}
        onChange={handleDeliveriesProviderChange}
        value={selectedDeliveryType}
      />

      {selectedDeliveryType === PACKAGE_TYPE.PENDING && (
        <PackagesList data={PENDING_DELIVERIES} />
      )}
      {selectedDeliveryType === PACKAGE_TYPE.UPCOMING && (
        <PackagesList data={UPCOMING_DELIVERIES} />
      )}
    </View>
  );
};

export default Delivery;

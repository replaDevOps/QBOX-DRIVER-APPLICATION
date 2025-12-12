import { PackagesList, StatusCard, StatusCardsGrid } from "@/components";
import { PENDING_DELIVERIES, STATUS_CARDS_DATA } from "@/constants";
import { mvs } from "@/utils/metrices";
import React, { useState } from "react";
import { View } from "react-native";

const Home = () => {
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: mvs(20) }}>
      <StatusCard
        isEnabled={isAlarmEnabled}
        onToggle={() => setIsAlarmEnabled(!isAlarmEnabled)}
      />

      <StatusCardsGrid
        title="My Statistics"
        subtitile="Today's Statistics"
        data={STATUS_CARDS_DATA}
      />

      <PackagesList title="Pending Deliveries" data={PENDING_DELIVERIES} />
    </View>
  );
};

export default Home;

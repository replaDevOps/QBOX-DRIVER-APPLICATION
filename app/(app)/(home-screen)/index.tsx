import { StatusCard, StatusCardsGrid } from "@/components";
import PaclagesList from "@/components/common/PaclagesList/PaclagesList";
import { PENDING_DELIVERIES, STATUS_CARDS_DATA } from "@/constants";
import { mvs } from "@/utils/metrices";
import React, { useState } from "react";
import { View } from "react-native";

const Home = () => {
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center", paddingBottom: mvs(20) }}>
      <StatusCard
        isEnabled={isAlarmEnabled}
        onToggle={() => setIsAlarmEnabled(!isAlarmEnabled)}
      />

      <StatusCardsGrid
        title="My Statistics"
        subtitile="Today's Statistics"
        data={STATUS_CARDS_DATA}
      />

      <PaclagesList title="Pending Deliveries" data={PENDING_DELIVERIES} />
    </View>
  );
};

export default Home;

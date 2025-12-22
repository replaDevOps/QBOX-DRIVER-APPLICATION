import { PackagesList, StatusCardsGrid } from "@/components";
import { COMPLETE_DELIVERIES, STATUS_CARDS_DATA } from "@/constants";
import { mvs } from "@/utils/metrices";
import React from "react";
import { View } from "react-native";

const History = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: mvs(20),
        paddingTop: mvs(10),
      }}
    >
      <StatusCardsGrid
        title="My Statistics"
        subtitile="Today's Statistics"
        data={STATUS_CARDS_DATA}
      />

      <PackagesList title="Completed Deliveries" data={COMPLETE_DELIVERIES} />
    </View>
  );
};

export default History;

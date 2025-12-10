import { StatusCardsGrid } from "@/components";
import PaclagesList from "@/components/common/PaclagesList/PaclagesList";
import { COMPLETE_DELIVERIES, STATUS_CARDS_DATA } from "@/constants";
import { mvs } from "@/utils/metrices";
import React from "react";
import { StyleSheet, View } from "react-native";

const History = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", padding: mvs(20) }}>
      <StatusCardsGrid
        title="My Statistics"
        subtitile="Today's Statistics"
        data={STATUS_CARDS_DATA}
      />

      <PaclagesList title="Completed Deliveries" data={COMPLETE_DELIVERIES} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});

import { EmptyList, QRCodeHistoryItem, Text } from "@/components";
import { QR_SCAN_HISTORY, Spacing } from "@/constants";
import { mvs } from "@/utils/metrices";
import { FlatList, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const QRCodeHistory = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: mvs(Spacing.md),
        }}
      >
        <FlatList
          data={QR_SCAN_HISTORY}
          keyExtractor={(item) => item?.id?.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: Spacing.sm,
                marginBottom: mvs(Spacing.md),
                marginTop: mvs(Spacing.md),
              }}
            >
              <Text size="lg" style={{ fontWeight: "bold" }}>
                QR Scan History
              </Text>
            </View>
          }
          ListEmptyComponent={<EmptyList title="QR Scan" marginTop={100} />}
          renderItem={({ item }: any) => <QRCodeHistoryItem item={item} />}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default QRCodeHistory;

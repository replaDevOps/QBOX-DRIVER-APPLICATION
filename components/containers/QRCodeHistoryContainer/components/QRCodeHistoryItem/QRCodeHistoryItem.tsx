import { Card, Chip, Text } from "@/components";
import { Colors, Spacing } from "@/constants";
import { mvs } from "@/utils/metrices";
import { format } from "date-fns";
import { View } from "react-native";
import { QRCodeHistoryItemProps } from "./props";

export const QRCodeHistoryItem = ({ item }: QRCodeHistoryItemProps) => {
  const handleCardPress = () => {};

  return (
    <Card
      variant="filled"
      showSideBorder
      sideBorderColor={item.isActive ? Colors.success : Colors.danger}
      style={{ marginBottom: mvs(Spacing.md) }}
      onPress={handleCardPress}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>{item?.qrCode}</Text>
        <Chip
          variant={item.isActive ? "success" : "error"}
          label={item.isActive ? "Active" : "Failed"}
          size="small"
        />
      </View>
      <Text size="sm">{item?.shortAddress}</Text>
      {item.isActive && (
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              variant="success"
              size="sm"
              style={{ marginTop: mvs(Spacing.sm) }}
            >
              Locker Opened
            </Text>
            <Text
              variant="success"
              size="sm"
              style={{ marginTop: mvs(Spacing.sm) }}
            >
              {format(new Date(item?.openedAt), "Pp")}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              variant="danger"
              size="sm"
              style={{ marginTop: mvs(Spacing.sm) }}
            >
              Locker Closed
            </Text>
            <Text
              variant="danger"
              size="sm"
              style={{ marginTop: mvs(Spacing.sm) }}
            >
              {format(item?.closedAt, "Pp")}
            </Text>
          </View>
        </View>
      )}
    </Card>
  );
};

export default QRCodeHistoryItem;

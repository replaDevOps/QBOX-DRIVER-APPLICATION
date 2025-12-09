import { Card, Chip, Text } from "@/components";
import { Colors, Spacing } from "@/constants";
import { mvs } from "@/utils/metrices";
import { format } from "date-fns";
import { View } from "react-native";
import { useData } from "./hooks";
import { QRCodeHistoryItemProps } from "./props";

export const QRCodeHistoryItem = ({
  item,
  onShare,
  onMarkAsExpire,
}: QRCodeHistoryItemProps) => {
  const { qrCodeDescription } = useData({
    item,
    onShare,
    onMarkAsExpire,
  });

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
        <Text style={{ fontWeight: "bold" }}>{item?.title}</Text>
        <Chip
          variant={item.isActive ? "success" : "error"}
          label={item.isActive ? "Active" : "Failed"}
          size="small"
        />
      </View>
      <Text size="sm">{qrCodeDescription}</Text>
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
              {format(item?.createdAt, "Pp")}
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
              {format(item?.createdAt, "Pp")}
            </Text>
          </View>
        </View>
      )}
    </Card>
  );
};

export default QRCodeHistoryItem;

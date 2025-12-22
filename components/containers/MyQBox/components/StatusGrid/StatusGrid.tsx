import { AttributeView, Text } from "@/components";
import { Colors } from "@/constants";
import { mvs } from "@/utils/metrices";
import { StyleSheet, View } from "react-native";
import { StatusCardsGridProps } from "./props";

export const StatusCardsGrid = ({
  title,
  subtitile,
  data,
}: StatusCardsGridProps) => {
  return (
    <View>
      <Text bold color={Colors.dark}>
        {title}
      </Text>

      <Text size="xs" style={{ marginVertical: mvs(10) }}>
        {subtitile}
      </Text>

      <View style={styles.container}>
        {data.map((item) => (
          <AttributeView key={item.id} item={item} width="31%" />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: mvs(8),
    justifyContent: "space-between",
  },
});

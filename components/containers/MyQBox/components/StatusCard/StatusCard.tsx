import { Card, CustomSwitch, Text } from "@/components";
import { Colors, Spacing } from "@/constants";
import { mvs } from "@/utils/metrices";
import { StyleSheet, View } from "react-native";
import { StatusCardProps } from "./prpos";

export const StatusCard = ({ isEnabled, onToggle }: StatusCardProps) => {
  return (
    <Card
      style={[
        styles.container,
        {
          backgroundColor: isEnabled
            ? Colors.successBackground
            : Colors.lightRed,
        },
      ]}
      variant="filled"
      contentStyle={styles.content}
    >
      <Text style={styles.title} size="md">
        My Status
      </Text>
      <View style={styles.controlsContainer}>
        <CustomSwitch value={isEnabled} onValueChange={onToggle} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: mvs(Spacing.lg),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: mvs(12),
  },
  title: {
    fontWeight: "bold",
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

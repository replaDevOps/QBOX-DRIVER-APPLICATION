import { BorderRadius } from "@/constants";
import { mvs } from "@/utils/metrices";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  packageImage: {
    width: mvs(100),
    height: mvs(100),
    borderRadius: mvs(BorderRadius.xs),
  },
});

import { mvs } from "@/utils/metrices";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    gap: 10,
    marginVertical: 15,
    paddingBottom: mvs(20),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "85%",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  closeButtonText: {
    fontSize: 32,
    color: "#666",
    lineHeight: 32,
  },
  qrCodeContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: mvs(20),
  },
});

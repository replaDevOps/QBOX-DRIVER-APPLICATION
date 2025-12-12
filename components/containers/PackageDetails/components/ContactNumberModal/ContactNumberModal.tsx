import { Text } from "@/components/ui";
import { Colors } from "@/constants";
import { mvs } from "@/utils/metrices";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";
import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface ContactNumberModalProps {
  visible: boolean;
  onClose: () => void;
  phoneNumber: string;
  title?: string;
}

export const ContactNumberModal = ({
  visible,
  onClose,
  phoneNumber,
  title = "Contact Number",
}: ContactNumberModalProps) => {
  const handleCopyToClipboard = async () => {
    await Clipboard.setStringAsync(phoneNumber);
    setCopySuccess(true);

    // Reset after a second (optional)
    setTimeout(() => {
      setCopySuccess(false);
    }, 1500);
  };

  const [copySuccess, setCopySuccess] = React.useState(false);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable
          style={styles.modalContent}
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text bold color={Colors.dark} style={styles.title}>
              {title}
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Phone Number Display */}
          <View style={styles.phoneNumberContainer}>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
            <TouchableOpacity
              onPress={handleCopyToClipboard}
              style={styles.copyButton}
              activeOpacity={0.7}
            >
              {copySuccess ? (
                <Text variant="success">Copied!</Text>
              ) : (
                <Ionicons
                  name="copy-outline"
                  size={20}
                  color={Colors.primary}
                />
              )}
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: mvs(20),
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: mvs(12),
    padding: mvs(20),
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: mvs(20),
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  closeButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: mvs(10),
  },
  phoneNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  phoneNumber: {
    fontSize: 16,
    color: Colors.dark,
    fontWeight: "500",
    flex: 1,
  },
  copyButton: {
    padding: mvs(8),
    marginLeft: mvs(12),
  },
});
export default ContactNumberModal;

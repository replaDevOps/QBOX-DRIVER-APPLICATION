import { Text } from "@/components/ui";
import { Colors } from "@/constants";
import { mvs } from "@/utils/metrices";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface CheckboxOption {
  id: string;
  label: string;
  checked: boolean;
}

interface CallHomeOwnerModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmText?: string;
  cancelText?: string;
  checkboxOptions?: CheckboxOption[];
  onCheckboxChange?: (id: string, checked: boolean) => void;
}

export const CallHomeOwnerModal: React.FC<CallHomeOwnerModalProps> = ({
  visible,
  onClose,
  onConfirm,
  title,
  confirmText = "Submit",
  cancelText = "Cancel",
  checkboxOptions = [],
  onCheckboxChange,
}) => {
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

          {/* Checkbox Options */}
          {checkboxOptions.length > 0 && (
            <View style={styles.checkboxList}>
              {checkboxOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.checkboxContainer}
                  onPress={() => onCheckboxChange?.(option.id, !option.checked)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.checkbox,
                      option.checked && styles.checkboxChecked,
                    ]}
                  >
                    {option.checked && (
                      <Ionicons
                        name="checkmark-sharp"
                        size={16}
                        color="white"
                      />
                    )}
                  </View>
                  <Text style={styles.checkboxLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>{cancelText}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text style={styles.confirmButtonText}>{confirmText}</Text>
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
    width: "100%",
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
  closeButtonText: {
    fontSize: 28,
    color: "#999",
    lineHeight: 28,
    fontWeight: "300",
  },
  checkboxList: {
    marginBottom: mvs(24),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: mvs(16),
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Colors.text,
    borderRadius: 4,
    marginRight: mvs(12),
    marginTop: mvs(2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkmark: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  checkboxLabel: {
    fontSize: 14,
    color: Colors.primary,
    flex: 1,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: mvs(12),
  },
  button: {
    flex: 1,
    paddingVertical: mvs(14),
    borderRadius: mvs(8),
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#F3F4F6",
  },
  confirmButton: {
    backgroundColor: Colors.primary,
  },
  cancelButtonText: {
    color: "#374151",
    fontSize: 15,
    fontWeight: "500",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});

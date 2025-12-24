import { Button, OTPInput, Text } from "@/components";
import { Spacing } from "@/constants";
import { BlurView } from "expo-blur";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Platform,
  Modal as RNModal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
  isLoading?: boolean;
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  showResendOption?: boolean;
  onResend?: () => void;
  footerText?: string;
  footerAction?: string;
  onFooterAction?: () => void;
}

export const OTPModal = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
  title,
  subtitle,
  primaryButtonText = "Verify",
  showResendOption = false,
  onResend,
  footerText,
  footerAction,
  onFooterAction,
}: OTPModalProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const handleOTPSubmit = (data: { otp: string }) => {
    onSubmit(data.otp);
  };

  const handleResend = () => {
    if (onResend) {
      onResend();
    }
  };

  const handleFooterAction = () => {
    if (onFooterAction) {
      onFooterAction();
    }
    onClose();
  };

  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <BlurView
          intensity={Platform.OS === "ios" ? 30 : 80}
          tint="dark"
          style={styles.blurContainer}
        >
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.container}>
              <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
              </View>

              <OTPInput
                name="otp"
                control={control}
                numberOfDigits={5}
                rules={{
                  required: "OTP is required",
                }}
              />

              {showResendOption && (
                <Text style={styles.resendText}>
                  Didn't receive code?{" "}
                  <Text
                    variant="primary"
                    style={styles.linkText}
                    onPress={handleResend}
                  >
                    Resend again
                  </Text>
                </Text>
              )}

              <View style={styles.actions}>
                <Button
                  title={primaryButtonText}
                  loading={isLoading}
                  onPress={handleSubmit(handleOTPSubmit)}
                />

                {footerText && footerAction && (
                  <Text style={styles.footerText}>
                    {footerText}{" "}
                    <Text
                      variant="primary"
                      style={styles.linkText}
                      onPress={handleFooterAction}
                    >
                      {footerAction}
                    </Text>
                  </Text>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </BlurView>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F5F5F7",
    borderRadius: 16,
    padding: 32,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  content: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#1a1a1a",
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    color: "#6B6B6B",
    lineHeight: 22,
  },
  resendText: {
    textAlign: "center",
    marginTop: Spacing.md,
  },
  footerText: {
    textAlign: "center",
    marginTop: Spacing.sm,
  },
  linkText: {
    fontWeight: "bold",
  },
  actions: {
    marginTop: 24,
  },
});

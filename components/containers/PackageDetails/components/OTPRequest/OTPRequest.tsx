import { Button, Card, TextInput } from "@/components/ui";
import { Colors } from "@/constants";
import React, { useCallback, useState } from "react";
import { Control } from "react-hook-form"; // Import the type if using TypeScript
import { Text } from "react-native";
import { Toast } from "toastify-react-native";

// Better typing (optional but recommended)
interface OTPRequestProps {
  onPress: () => void;
  showOtpInput: boolean;
  control: Control<any>; // Replace 'any' with your form type if available
}

export const OTPRequest = ({
  onPress,
  showOtpInput,
  control,
}: OTPRequestProps) => {
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const createVerifyButtonConfig = useCallback((isVerified: boolean) => {
    if (isVerified) {
      return {
        text: "Verified!",
        variant: "transparent" as const,
        textColor: Colors.success,
        backgroundColor: "transparent",
        disabled: true,
        opacity: 1,
      };
    }
    return {
      text: "Verify",
      variant: "primary" as const,
      textColor: Colors.white,
      backgroundColor: Colors.primary,
      disabled: false,
      opacity: 1,
    };
  }, []);

  const otpButtonConfig = createVerifyButtonConfig(isOtpVerified);

  return (
    <Card variant="filled" style={{ marginTop: 10 }}>
      <Text style={{ marginBottom: 10 }}>OTP</Text>
      {showOtpInput ? (
        <TextInput
          name="otp"
          inputMode="numeric"
          control={control}
          endButtonText={otpButtonConfig.text}
          autoCorrect={false}
          placeholder="XXXX"
          onEndButtonClick={() => {
            setIsOtpVerified(true);
            Toast.show({
              type: "warn",
              text1: "Make sure you hand over the package to the homeowner",
              position: "top",
              backgroundColor: Colors.white,
              textColor: Colors.text,
              progressBarColor: Colors.white,
              visibilityTime: 3000,
            });
          }}
          endButtonProps={{
            variant: otpButtonConfig.variant,
            textStyle: { color: otpButtonConfig.textColor },
            disabled: otpButtonConfig.disabled,
            style: {
              opacity: otpButtonConfig.opacity,
              backgroundColor: otpButtonConfig.backgroundColor,
            },
          }}
        />
      ) : (
        <Button title="Request for OTP" onPress={onPress} />
      )}
    </Card>
  );
};

export default OTPRequest;

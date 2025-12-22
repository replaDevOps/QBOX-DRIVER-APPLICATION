import { Button, Form, FormLayout, OTPInput, Text } from "@/components";
import { Spacing } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const OTPVerification = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Get parameters from navigation
  const params = useLocalSearchParams<{
    subtitle?: string;
    verificationType?: string;
    contactInfo?: string;
  }>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const handleOTPSubmit = async (data: { otp: string }) => {
    setIsLoading(true);
    try {
      console.log("OTP submitted:", data.otp);
      router.navigate("/resetPassword");
    } catch (error) {
      console.error("OTP verification failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      console.log("Resending OTP...");
    } catch (error) {
      console.error("Resend OTP failed:", error);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <FormLayout
      title="Enter Verification Code"
      description={
        params.subtitle || "Enter the 5 digit OTP code sent to your contact"
      }
    >
      <Form>
        <OTPInput
          name="otp"
          control={control}
          numberOfDigits={5}
          styleProps={{ marginTop: Spacing.xl }}
          rules={{
            required: "OTP is required",
          }}
        />

        <Text
          style={{
            textAlign: "center",
            marginTop: Spacing.md,
          }}
        >
          Didn't receive code?{" "}
          <Text
            variant="primary"
            style={{ fontWeight: "bold" }}
            onPress={handleResendOTP}
          >
            Resend again
          </Text>
        </Text>

        <Button
          style={{ marginTop: Spacing.xl }}
          title="Confirm"
          loading={isLoading}
          onPress={handleSubmit(handleOTPSubmit)}
        />

        <Text
          style={{
            textAlign: "center",
            marginTop: Spacing.md,
          }}
        >
          Remember Password? Back to{" "}
          <Text
            variant="primary"
            style={{ fontWeight: "bold" }}
            onPress={handleGoBack}
          >
            login
          </Text>
        </Text>
      </Form>
    </FormLayout>
  );
};

export default OTPVerification;

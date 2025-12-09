import { Button, Card } from "@/components/ui";
import React from "react";
import { Text } from "react-native";

export const OTPRequest = () => {
  return (
    <Card variant="filled" style={{ marginTop: 10 }}>
      <Text style={{ marginBottom: 10 }}>OTP</Text>
      <Button title="Request for OTP" onPress={() => {}} />
    </Card>
  );
};

export default OTPRequest;

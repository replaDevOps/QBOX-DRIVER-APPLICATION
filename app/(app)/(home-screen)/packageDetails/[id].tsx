import {
  AppHeaderLeft,
  AppHeaderTitle,
  CallHomeOwnerModal,
  ContactNumberModal,
  OTPRequest,
  PackageDetailsAttribute,
  PackageDetailsHeader,
  QRCodeAndLocation,
  Text,
} from "@/components";
import { PACKAGE_DETAILS, Spacing } from "@/constants";
import { PackageDetailsType } from "@/types";
import { mvs } from "@/utils/metrices";
import Feather from "@expo/vector-icons/Feather";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export const PackageDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [packageData, setPackageData] = useState<PackageDetailsType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
  // Modal states
  const [isCallModalVisible, setIsCallModalVisible] = useState(false);
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);

  // Checkbox options state
  const [checkboxOptions, setCheckboxOptions] = useState([
    {
      id: "qr-scan",
      label: "I herby that I try to scan the QR Code before it get expired",
      checked: false,
    },
    {
      id: "qbox-working",
      label: "QBox not working.",
      checked: false,
    },
  ]);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const packageDetail = PACKAGE_DETAILS.find(
      (item) => item.id.toString() === id
    );

    if (packageDetail) {
      setPackageData(packageDetail);
    } else {
      console.error("Package not found");
    }

    setLoading(false);
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppHeaderLeft canGoBack />
          <AppHeaderTitle
            title={
              packageData?.courierName || packageData
                ? `Package #${packageData.id}`
                : "Package Not Found"
            }
          />
        </View>
      ),
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => setIsCallModalVisible(true)}>
            <Feather name="phone" size={24} color="black" />
          </TouchableOpacity>
        );
      },
    });
  }, [packageData, navigation]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckboxOptions((prev) =>
      prev.map((option) => (option.id === id ? { ...option, checked } : option))
    );
  };

  const handleCallConfirm = () => {
    // Get selected options
    const selectedOptions = checkboxOptions.filter((option) => option.checked);
    console.log("Confirmed with options:", selectedOptions);

    // Close the call modal and open contact number modal
    setIsCallModalVisible(false);
    setIsContactModalVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!packageData) {
    return (
      <View style={styles.centerContainer}>
        <Text>Package not found</Text>
      </View>
    );
  }

  const RequestOtp = () => {
    console.log("OTP Requested");
    setShowOtpInput(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <PackageDetailsHeader packageData={packageData} />
        <OTPRequest
          onPress={RequestOtp}
          showOtpInput={showOtpInput}
          control={control}
        />

        <PackageDetailsAttribute attributes={packageData.attributes} />
        <QRCodeAndLocation
          qBoxImage={packageData.imageUrl}
          qrCodeImage={packageData.imageUrl}
          liveLocationImage={packageData.imageUrl}
          packageDeliveryTutorialImage={packageData.imageUrl}
        />
      </ScrollView>

      {/* Call Home-Owner Modal */}
      <CallHomeOwnerModal
        visible={isCallModalVisible}
        onClose={() => setIsCallModalVisible(false)}
        onConfirm={handleCallConfirm}
        title="Call Home-Owner"
        confirmText="Submit"
        cancelText="Cancel"
        checkboxOptions={checkboxOptions}
        onCheckboxChange={handleCheckboxChange}
      />

      {/* Contact Number Modal */}
      <ContactNumberModal
        visible={isContactModalVisible}
        onClose={() => setIsContactModalVisible(false)}
        phoneNumber="+966 XX XXX XXXX"
        title="Contact Number"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: mvs(20),
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    padding: mvs(Spacing.lg),
  },
});

export default PackageDetails;

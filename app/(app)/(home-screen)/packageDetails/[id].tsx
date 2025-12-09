import {
  AppHeaderLeft,
  AppHeaderTitle,
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
import { ScrollView, StyleSheet, View } from "react-native";

export const PackageDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [packageData, setPackageData] = useState<PackageDetailsType>();
  const [loading, setLoading] = useState<boolean>(true);

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
        return <Feather name="phone" size={24} color="black" />;
      },
    });
  }, [packageData, navigation]);

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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <PackageDetailsHeader packageData={packageData} />
        <OTPRequest />
        <PackageDetailsAttribute attributes={packageData.attributes} />
        <QRCodeAndLocation
          qBoxImage={packageData.imageUrl}
          qrCodeImage={packageData.imageUrl}
          liveLocationImage={packageData.imageUrl}
          packageDeliveryTutorialImage={packageData.imageUrl}
        />
      </ScrollView>
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

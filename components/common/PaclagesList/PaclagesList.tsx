import { PackageItemIcon } from "@/assets/icons";
import { Card, Chip, Text } from "@/components/ui";
import { BorderRadius, Colors, PACKAGE_TYPE, Spacing } from "@/constants";
import { mvs } from "@/utils/metrices";
import { format } from "date-fns";
import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { EmptyList } from "../EmptyList";
import { PaclagesListProps } from "./props";

const PaclagesList = ({ title, data }: PaclagesListProps) => {
  const handleCardPress = (id: number) => {
    router.navigate(`/packageDetails/${id}`);
  };

  return (
    <View
      style={{
        width: "100%",
        marginTop: mvs(Spacing.md),
        flex: 1,
      }}
    >
      {title && (
        <Text
          bold
          color={Colors.dark}
          style={{ marginBottom: mvs(Spacing.sm) }}
        >
          {title}
        </Text>
      )}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: mvs(20),
        }}
        ListEmptyComponent={<EmptyList title={title} />}
        renderItem={({ item }) => (
          <Card
            variant="filled"
            style={{
              marginBottom: mvs(Spacing.sm),
              width: "100%",
            }}
            onPress={() => {
              item.type === PACKAGE_TYPE.PENDING && handleCardPress(item.id);
              console.log("Pressed package with ID:", item.id);
            }}
          >
            <View style={{ flexDirection: "row", gap: mvs(12) }}>
              <View
                style={{
                  width: mvs(40),
                  height: mvs(40),
                  borderRadius: BorderRadius.full,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                }}
              >
                <PackageItemIcon />
              </View>

              <View style={{ flex: 1 }}>
                <Text size="xs" variant="secondary">
                  QBox ID : {item.qBoxId}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text bold numberOfLines={1} style={{ marginTop: mvs(2) }}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ position: "absolute", right: -5, top: -10 }}>
                  {item.type === PACKAGE_TYPE.PENDING && item.status && (
                    <Chip
                      label={item.status}
                      size="medium"
                      variant={
                        item.status === "Out for Delivery"
                          ? "warning"
                          : item.status === "Shipment Created"
                          ? "info"
                          : "default"
                      }
                    />
                  )}
                </View>

                <Text size="sm">{item.shortAddress}</Text>

                <Text
                  variant="secondary"
                  size="sm"
                  style={{ marginTop: mvs(Spacing.sm) }}
                >
                  Tracking ID : {item.trackingId}
                </Text>

                <Text variant="secondary" size="sm">
                  {format(new Date(item.createdAt), "Pp")}
                </Text>
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  );
};

export default PaclagesList;

const styles = StyleSheet.create({});

import { QRCodeIcon } from "@/assets/icons";
import { Button, Card, Text } from "@/components/ui";
import { Colors } from "@/constants";
import { mvs } from "@/utils/metrices";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";

import { Image } from "expo-image";
import React, { useState } from "react";
import ImageViewing from "react-native-image-viewing";

import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";

export const QRCodeAndLocation = ({
  qBoxImage,
  qrCodeImage,
  liveLocationImage,
  packageDeliveryTutorialImage,
}: any) => {
  const [isQRModalVisible, setIsQRModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const images = [qBoxImage];

  return (
    <View style={styles.sectionContainer}>
      <Text bold color={Colors.dark}>
        QR Code & Location
      </Text>

      <View>
        <Text bold color={Colors.dark}>
          QBox Image
        </Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image
            source={qBoxImage}
            style={{
              width: "100%",
              height: 150,
              borderRadius: mvs(12),
            }}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text bold color={Colors.dark}>
          QR Code
        </Text>

        <View
          style={{
            width: "100%",
            height: 150,
            borderRadius: mvs(12),
            overflow: "hidden",
            backgroundColor: Colors.gray,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCodeIcon />
          </View>

          {Platform.OS === "ios" ? (
            <BlurView
              intensity={15}
              tint="light"
              style={[
                StyleSheet.absoluteFill,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Button
                title="View"
                onPress={() => setIsQRModalVisible(true)}
                style={{ width: "30%" }}
              />
            </BlurView>
          ) : (
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              ]}
            >
              <Button
                title="View"
                onPress={() => setIsQRModalVisible(true)}
                style={{ width: "30%" }}
              />
            </View>
          )}
        </View>
      </View>

      <View>
        <Text bold color={Colors.dark}>
          Live Location
        </Text>
        <Image
          source={liveLocationImage}
          style={{
            width: "100%",
            height: 150,
            borderRadius: mvs(12),
          }}
          contentFit="cover"
        />
      </View>

      <View>
        <Text bold color={Colors.dark}>
          Package Delivery Tutorial
        </Text>
        <Image
          source={packageDeliveryTutorialImage}
          style={{
            width: "100%",
            height: 150,
            borderRadius: 12,
          }}
        />
      </View>

      <ImageViewing
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />

      {/* QR Code Modal */}
      <Modal
        visible={isQRModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsQRModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setIsQRModalVisible(false)}
        >
          <Pressable
            style={styles.modalContent}
            onPress={(e) => e.stopPropagation()}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text bold color={Colors.dark}>
                QR Code
              </Text>
              <TouchableOpacity onPress={() => setIsQRModalVisible(false)}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <Card variant="filled" style={{ width: "100%" }}>
              <View style={styles.qrCodeContainer}>
                <Image
                  source={qrCodeImage}
                  style={{
                    width: "100%",
                    height: 150,
                    borderRadius: mvs(12),
                  }}
                  contentFit="contain"
                />
                <Text>Expense-0123</Text>
              </View>
            </Card>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default QRCodeAndLocation;

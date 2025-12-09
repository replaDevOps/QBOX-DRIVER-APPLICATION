import {
  CameraIcon,
  LED_IndicatorIcon,
  OnlineStatusIcon,
  PackageTypeIcon,
  PackageWeightIcon,
} from "@/assets/icons";
import { PackageDetailsType } from "@/types";
import { PACKAGE_TYPE, QR_VALIDITY_DURATION_TYPE } from "./enums";

export interface StatusCardItem {
  id: string;
  icon: any;
  title: string;
  value: string;
}

export const STATUS_CARDS_DATA: StatusCardItem[] = [
  {
    id: "1",
    icon: OnlineStatusIcon,
    title: "Total Deliveries",
    value: "05",
  },
  {
    id: "2",
    icon: CameraIcon,
    title: "Pending Deliveries",
    value: "03",
  },
  {
    id: "3",
    icon: LED_IndicatorIcon,
    title: "Total Hours",
    value: "1.5",
  },
];

export const PENDING_DELIVERIES = [
  {
    id: 1,
    qBoxId: "X12345",
    title: "Ali Khan / Ahmed Raza",
    shortAddress: "Courier Name",
    trackingId: "SM240815001",
    createdAt: new Date("2025-01-19T12:00:00Z").toISOString(),
    status: "Shipment Created",
    type: PACKAGE_TYPE.PENDING,
  },
  {
    id: 2,
    qBoxId: "X67890",
    title: "Driver: Umar / Sender: Bilal",
    shortAddress: "FastEx Logistics",
    trackingId: "SM240815002",
    createdAt: new Date("2025-01-20T09:30:00Z").toISOString(),
    status: "Out for Delivery",
    type: PACKAGE_TYPE.PENDING,
  },
];

export const PACKAGE_DETAILS: PackageDetailsType[] = [
  {
    id: 1,
    qBoxId: "QBX-55112",
    type: PACKAGE_TYPE.PENDING,
    courierName: "John Doe (SwiftExpress)",
    shortAddress: "12th Street, Downtown",
    lastUpdate: "2025-01-16T09:20:00Z",
    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],
    imageUrl: require("@/assets/images/packageItem.jpg"),
    location: "Rider is 1.8 km away",
    packageDeilveryTutorial: "Keep your phone nearby for rider call.",
  },
  {
    id: 2,
    qBoxId: "QBX-78100",
    type: PACKAGE_TYPE.PENDING,
    courierName: "Maria Khan (FastDrop)",
    shortAddress: "Sector F, Bahria Town",
    lastUpdate: "2025-01-16T08:10:00Z",
    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],
    imageUrl: require("@/assets/images/packageItem.jpg"),
    location: "Rider is 3.4 km away",
    packageDeilveryTutorial: "Be available at your home.",
  },

  {
    id: 201,
    qBoxId: "QBX-99110",
    type: PACKAGE_TYPE.COMPLETE,
    courierName: "Ahmed Raza (BlueCourier)",
    shortAddress: "Model Town, Block C",
    lastUpdate: "2025-01-14T17:45:00Z",
    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],
    imageUrl: require("@/assets/images/packageItem.jpg"),
    location: "Delivered to your doorstep",
    packageDeilveryTutorial:
      "Your package was delivered successfully. Check your doorstep.",
  },
  {
    id: 202,
    qBoxId: "QBX-66221",
    type: PACKAGE_TYPE.COMPLETE,
    courierName: "Sana Malik (CargoPro)",
    shortAddress: "Garden Town, Lahore",
    lastUpdate: "2025-01-13T13:25:00Z",
    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],
    imageUrl: require("@/assets/images/packageItem.jpg"),
    location: "Left at your front gate",
    packageDeilveryTutorial:
      "You can collect the package from your entry gate.",
  },

  {
    id: 301,
    qBoxId: "QBX-44129",
    type: PACKAGE_TYPE.UPCOMING,
    courierName: "Rider Assigned Soon",
    shortAddress: "Phase 4, DHA Lahore",
    lastUpdate: "2025-01-18T10:00:00Z",
    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],
    imageUrl: require("@/assets/images/packageItem.jpg"),
    location: "Label created, awaiting pickup",
    packageDeilveryTutorial:
      "You will receive updates once the courier picks it.",
  },
  {
    id: 302,
    qBoxId: "QBX-77290",
    type: PACKAGE_TYPE.UPCOMING,
    courierName: "Awaiting Courier",
    shortAddress: "PECHS Block 2, Karachi",
    lastUpdate: "2025-01-18T11:30:00Z",
    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],
    imageUrl: require("@/assets/images/packageItem.jpg"),
    location: "Shipment booked, not yet picked",
    packageDeilveryTutorial:
      "Your package is being prepared. Delivery will start soon.",
  },
];

export const QR_CODE_HISTORY = [
  {
    id: 1,
    title: "Entrance Gate QR",
    isActive: true,
    createdAt: new Date("2025-01-10T10:15:00Z").toISOString(),
    validityDuration: 15,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.MIN,
    maxUsers: 20,
    usersLeft: 10,
  },
  {
    id: 2,
    title: "Cafeteria Access",
    isActive: false,
    createdAt: new Date("2025-01-02T09:00:00Z").toISOString(),
    validityDuration: 2,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.HOUR,
    maxUsers: 50,
    usersLeft: 20,
  },
  {
    id: 3,
    title: "Conference Room QR",
    isActive: true,
    createdAt: new Date("2025-01-11T14:45:00Z").toISOString(),
    validityDuration: 1,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.DAY,
    maxUsers: 5,
    usersLeft: 2,
  },
  {
    id: 4,
    title: "Event Guest Entry",
    isActive: true,
    createdAt: new Date("2025-01-12T18:30:00Z").toISOString(),
    validityDuration: 30,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.MIN,
    maxUsers: 200,
    usersLeft: 90,
  },
  {
    id: 5,
    title: "VIP Lounge Access",
    isActive: false,
    createdAt: new Date("2025-01-05T11:20:00Z").toISOString(),
    validityDuration: 12,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.HOUR,
    maxUsers: 10,
    usersLeft: 0,
  },
  {
    id: 6,
    title: "Parking Zone QR",
    isActive: true,
    createdAt: new Date("2025-01-09T07:10:00Z").toISOString(),
    validityDuration: 2,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.DAY,
    maxUsers: 300,
    usersLeft: 100,
  },
  {
    id: 7,
    title: "Temporary Office QR",
    isActive: true,
    createdAt: new Date("2025-01-12T09:40:00Z").toISOString(),
    validityDuration: 45,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.MIN,
    maxUsers: 3,
    usersLeft: 2,
  },
  {
    id: 8,
    title: "Employee Training Session",
    isActive: false,
    createdAt: new Date("2025-01-01T13:00:00Z").toISOString(),
    validityDuration: 24,
    validityDurationType: QR_VALIDITY_DURATION_TYPE.HOUR,
    maxUsers: 50,
    usersLeft: 10,
  },
];

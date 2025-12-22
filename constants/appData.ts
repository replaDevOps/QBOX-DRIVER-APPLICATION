import {
  CameraIcon,
  ContactIcon,
  LanguageIcon,
  LED_IndicatorIcon,
  LogoutIcon,
  OnlineStatusIcon,
  PackageTypeIcon,
  PackageWeightIcon,
  PasswordIcon,
} from "@/assets/icons";
import { PackageDetailsType, ProfileItem } from "@/types";
import { PACKAGE_TYPE } from "./enums";
import { Colors } from "./theme";

export interface StatusCardItem {
  id: string;
  icon: any;
  title: string;
  value: string;
}

export const MENU_ITEM: ProfileItem[] = [
  {
    id: 1,
    title: "Total Deliveries",
    rightText: "45",
    backgroundColor: Colors.primary,
    textColor: Colors.white,
    rightTextColor: Colors.white,
  },
  {
    id: 2,
    icon: LanguageIcon,
    title: "Language",
    path: "/appLanguage",
    rightText: "English",
  },
  {
    id: 3,
    icon: PasswordIcon,
    title: "Password",
    path: "/passwordManager",
  },

  { id: 4, icon: ContactIcon, title: "Contact Us", path: "/" },
  {
    id: 5,
    icon: LogoutIcon,
    title: "Logout",
    backgroundColor: Colors.lightRed,
    textColor: Colors.danger,
  },
];

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

export const COMPLETE_DELIVERIES = [
  {
    id: 1,
    qBoxId: "X12345",
    title: "Muhammad Jan",
    shortAddress: "Saddar Karachi",
    trackingId: "SM240095001",
    createdAt: new Date("2025-01-19T12:00:00Z").toISOString(),
    type: PACKAGE_TYPE.COMPLETE,
  },
  {
    id: 2,
    qBoxId: "H87790",
    title: "Bilal",
    shortAddress: "FastEx Logistics",
    trackingId: "SM240815002",
    createdAt: new Date("2025-01-20T09:30:00Z").toISOString(),
    type: PACKAGE_TYPE.COMPLETE,
  },
  {
    id: 3,
    qBoxId: "X16745",
    title: " Ahmed Raza",
    shortAddress: "Saddar Rawalpindi",
    trackingId: "SM24985001",
    createdAt: new Date("2025-01-19T12:00:00Z").toISOString(),
    type: PACKAGE_TYPE.COMPLETE,
  },
  {
    id: 4,
    qBoxId: "A67890",
    title: "Driver: Umar ",
    shortAddress: "FastEx Logistics",
    trackingId: "GF2461592",
    createdAt: new Date("2025-01-20T09:30:00Z").toISOString(),
    type: PACKAGE_TYPE.COMPLETE,
  },
];

export const UPCOMING_DELIVERIES = [
  {
    id: 1,
    qBoxId: "U11223",
    title: "Ali Raza / Ahmed Khan",
    shortAddress: "SwiftExpress",
    trackingId: "SM250101001",
    createdAt: new Date("2025-01-21T10:00:00Z").toISOString(),
    type: PACKAGE_TYPE.UPCOMING,
  },
  {
    id: 2,
    qBoxId: "U44556",
    title: "Driver: Sara / Sender: Bilal",
    shortAddress: "FastDrop Logistics",
    trackingId: "SM250101002",
    createdAt: new Date("2025-01-22T14:30:00Z").toISOString(),
    type: PACKAGE_TYPE.UPCOMING,
  },
  {
    id: 3,
    qBoxId: "U77889",
    title: "John Doe / Customer: Ali",
    shortAddress: "QuickShip",
    trackingId: "SM250101003",
    createdAt: new Date("2025-01-23T09:15:00Z").toISOString(),
    type: PACKAGE_TYPE.UPCOMING,
  },
  {
    id: 4,
    qBoxId: "U99001",
    title: "Driver: Ayesha / Sender: Omar",
    shortAddress: "RapidExpress",
    trackingId: "SM250101004",
    createdAt: new Date("2025-01-24T08:45:00Z").toISOString(),
    type: PACKAGE_TYPE.UPCOMING,
  },
];

export const PACKAGE_DETAILS: PackageDetailsType[] = [
  {
    id: 1,
    qBoxId: "QBX-55112",
    trackingId: "SM240815001",
    type: PACKAGE_TYPE.PENDING,
    courierName: "John Doe (SwiftExpress)",
    shortAddress: "12th Street, Downtown",
    lastUpdate: "2025-01-16T09:20:00Z",

    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],

    imageUrl: require("@/assets/images/packageItem.jpg"),
    qrCodeImageUrl: require("@/assets/images/qrCodeImage.png"),

    liveLocationImageUrl: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjac7VU_nynqpa3Vliakym3klMOtIkEMJyoQ&s",
    },

    packageDeliveryTutorialImage: {
      uri: "https://assets-v2.lottiefiles.com/a/49847160-3f53-11ef-8109-cbcc69139eb2/fZaPRJe15G.gif",
    },

    location: "Rider is 1.8 km away",
    packageDeilveryTutorial: "Keep your phone nearby for rider call.",
  },
  {
    id: 2,
    qBoxId: "QBX-78100",
    trackingId: "SM240815002",

    type: PACKAGE_TYPE.PENDING,
    courierName: "Maria Khan (FastDrop)",
    shortAddress: "Sector F, Bahria Town",
    lastUpdate: "2025-01-16T08:10:00Z",

    attributes: [
      { icon: PackageTypeIcon, type: "Package Type", value: "Electronic" },
      { icon: PackageWeightIcon, type: "Package Weight", value: "1 kg" },
    ],

    imageUrl: require("@/assets/images/packageItem.jpg"),
    qrCodeImageUrl: require("@/assets/images/qrCodeImage.png"),

    liveLocationImageUrl: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjac7VU_nynqpa3Vliakym3klMOtIkEMJyoQ&s",
    },

    packageDeliveryTutorialImage: {
      uri: "https://assets-v2.lottiefiles.com/a/49847160-3f53-11ef-8109-cbcc69139eb2/fZaPRJe15G.gif",
    },

    location: "Rider is 3.4 km away",
    packageDeilveryTutorial: "Be available at your home.",
  },
];

export const QR_SCAN_HISTORY = [
  {
    id: 1,
    qrCode: "QWERT12345",
    shortAddress: "Main Entrance Access",
    isActive: true,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-10T10:15:00Z").toISOString(),
  },
  {
    id: 2,
    qrCode: "ASDFG67890",
    shortAddress: "Main Entrance Access",
    isActive: false,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-02T09:00:00Z").toISOString(),
  },
  {
    id: 3,
    qrCode: "ZXCVB12345",
    shortAddress: "Main Entrance Access",
    isActive: true,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-11T14:45:00Z").toISOString(),
  },
  {
    id: 4,
    qrCode: "TER567898",
    shortAddress: "Main Entrance Access",
    isActive: true,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-12T18:30:00Z").toISOString(),
  },
  {
    id: 5,
    qrCode: "DFR456757",
    shortAddress: "Main Entrance Access",
    isActive: false,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-05T11:20:00Z").toISOString(),
  },
  {
    id: 6,
    qrCode: "RW54657657",
    shortAddress: "Main Entrance Access",
    isActive: true,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-09T07:10:00Z").toISOString(),
  },
  {
    id: 7,
    qrCode: "RW54657574",
    shortAddress: "Main Entrance Access",
    isActive: true,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-12T09:40:00Z").toISOString(),
  },
  {
    id: 8,
    qrCode: "KJH567857",
    shortAddress: "Main Entrance Access",
    isActive: false,
    openedAt: new Date("2024-03-10T10:19:00Z").toISOString(),
    closedAt: new Date("2025-01-01T13:00:00Z").toISOString(),
  },
];

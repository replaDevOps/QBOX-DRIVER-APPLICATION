import {
  CameraIcon,
  LED_IndicatorIcon,
  OnlineStatusIcon,
} from "@/assets/icons";
import { PACKAGE_TYPE } from "./enums";

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

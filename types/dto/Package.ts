import { PACKAGE_TYPE } from "@/constants";

export interface PackageAttribute {
  type: string;
  value: string;
  icon: any;
}

export interface PackageBase {
  id: number;
  qBoxId: string;
  type: PACKAGE_TYPE;
  courierName: string;
  shortAddress: string;
  lastUpdate: string;
  attributes?: PackageAttribute[];
  qrCodeImageUrl?: any;
  liveLocationImageUrl?: {
    uri: string;
  };
  packageDeliveryTutorialImage?: {
    uri?: string;
  };
  imageUrl?: any;
  location?: string;
  packageDeilveryTutorial?: string;
}

export interface Complete extends PackageBase {
  type: PACKAGE_TYPE.COMPLETE;
}
export interface Pending extends PackageBase {
  type: PACKAGE_TYPE.PENDING;
}

export interface Upcoming extends PackageBase {
  type: PACKAGE_TYPE.UPCOMING;
}

export type PackageDetailsType = Complete | Pending | Upcoming;

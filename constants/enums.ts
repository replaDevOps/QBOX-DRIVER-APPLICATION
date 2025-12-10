export enum AUTH_PROVIDERS {
  EMAIL = "email",
  PHONE = "phone",
}
export enum PACKAGE_TYPE {
  COMPLETE = "complete",
  PENDING = "pending",
  UPCOMING = "upcoming",
}
export enum QR_VALIDITY_DURATION_TYPE {
  MIN = "min",
  HOUR = "hour",
  DAY = "day",
}

export const PACKAGES_OPTIONS = [
  { label: "Pending", value: PACKAGE_TYPE.PENDING },
  { label: "Upcoming", value: PACKAGE_TYPE.UPCOMING },
  { label: "Complete", value: PACKAGE_TYPE.COMPLETE },
];

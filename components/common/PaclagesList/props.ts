export interface PackageItem {
  id: number;
  qBoxId: string;
  title: string;
  shortAddress: string;
  trackingId: string;
  createdAt: string;
  status?: string | null;
  type: string;
}

export interface PaclagesListProps {
  title: string;
  data: PackageItem[]; // You'll need to define this type
}

import { StatusCardItem } from "@/constants";

interface StatusGrid {
  type: string;
  value: string;
}

export interface StatusGridProps {
  attributes: StatusGrid[];
}

export interface StatusCardsGridProps {
  title: string;
  subtitile: string;
  data: StatusCardItem[]; // ✅ Correct - array of StatusCardItem
}

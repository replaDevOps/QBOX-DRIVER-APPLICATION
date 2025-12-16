import {
  DeliveryIcon,
  DeliveryIconOutline,
  HistoryIcon,
  HistoryIconOutline,
  HomeIcon,
  HomeIconOutline,
  ProfileIcon,
  ProfileIconOutline,
} from "@/assets/icons";

export const BOTTOM_TABS = [
  {
    id: 1,
    name: "(a-home-screen)",
    title: "Home",
    Icon: HomeIcon,
    IconOutline: HomeIconOutline,
    isBottomTab: true,
  },
  {
    id: 2,
    name: "(b-history-screen)",
    title: "History",
    Icon: HistoryIcon,
    IconOutline: HistoryIconOutline,
    isBottomTab: true,
  },
  {
    id: 3,
    name: "(c-delivery-screen)",
    title: "Deliveries",
    Icon: DeliveryIcon,
    IconOutline: DeliveryIconOutline,
    isBottomTab: true,
  },
  {
    id: 4,
    name: "(d-profile-screen)",
    title: "Profile",
    Icon: ProfileIcon,
    IconOutline: ProfileIconOutline,
    isBottomTab: true,
  },
];

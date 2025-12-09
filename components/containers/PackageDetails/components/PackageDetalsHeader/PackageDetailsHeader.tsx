import { ItemInfo } from "@/components/common";
import { Text } from "@/components/ui";
import { format } from "date-fns";
import { Image } from "expo-image";
import { View } from "react-native";
import { styles } from "./style";

export const PackageDetailsHeader = ({ packageData }: any) => {
  return <OutgoingPackageDetailsHeader data={packageData} />;
};

const OutgoingPackageDetailsHeader = ({ data }: any) => (
  <ItemInfo
    title="QBox ID"
    description={data.courierName}
    descriptionProps={{ size: "sm" }}
    leftContent={
      <View>
        <Text size="sm">{data.shortAddress}</Text>
        <Text size="sm">{data.shortAddress}</Text>
        <Text size="sm">{`Last upd ate: ${format(
          data.lastUpdate,
          "Pp"
        )}`}</Text>
      </View>
    }
    rightContent={<Image source={data.imageUrl} style={styles.packageImage} />}
  />
);

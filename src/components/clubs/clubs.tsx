import React from "react";
import { List, ListItem } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { ImageItem } from "./image-item";
import { AddClubTopBar } from "./add-club";
import { SelectSeason } from "./select-season.tsx";
import { useSelector } from "react-redux";
import { filteredClubsData } from "../../utils";

export const Clubs = (props) => {
  const state = useSelector((state) => state);
  console.log("filtered returned", filteredClubsData(state));
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title}`}
      accessoryLeft={(props) => ImageItem(props, item?.logo)}
      description={`${item.country}`}
      onPress={() =>
        props?.navigation.navigate("CLUB DETAILS", { clubID: item?.id, state })
      }
    />
  );

  return (
    <SafeAreaView>
      <View style={styles?.container}>
        <AddClubTopBar {...props} state={state} />
        <SelectSeason season={state?.season?.selectedSeason} state={state} />
        <List data={filteredClubsData(state)} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
});

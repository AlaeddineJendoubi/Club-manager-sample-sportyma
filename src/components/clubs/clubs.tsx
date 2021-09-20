import React from "react";
import { Button, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { ImageItem } from "./image-item";
import { AddClubTopBar } from "./add-club";
import { SelectSeason } from "./select-season.tsx";
import { useSelector } from "react-redux";
import { filteredClubsData } from "../../utils";

export const Clubs = (props) => {
  const state = useSelector((state) => state);

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
    <>
      <View style={styles?.container}>
        <AddClubTopBar {...props} state={state} />
        <SelectSeason state={state} />
        <List data={filteredClubsData(state)} renderItem={renderItem} />
      </View>
      <Button>Players Stats</Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
});

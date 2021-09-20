import React from "react";
import { Button, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

import { useSelector } from "react-redux";
import { filteredClubsData } from "../../utils";
import { ImageItem } from "../clubs/image-item";

export const Players = (props) => {
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
    <>
      <View style={styles?.container}>
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

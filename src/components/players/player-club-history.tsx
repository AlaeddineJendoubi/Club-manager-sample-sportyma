import React from "react";
import { Button, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { clubsData } from "../../utils";
import { getPlayerClubs } from "../../utils/get-players-data";
import { ImageItem } from "../clubs/image-item";

export const PlayerClubHistory = (props) => {
  const state = useSelector((state) => state);
  const player = props?.route?.params?.data;
  const clubs = state?.clubs;
  const playerClubs = getPlayerClubs(player, clubs);

  const renderItem = ({ item, index }) => (
    <ListItem
      accessoryLeft={(props) => ImageItem(props, item?.logo)}
      title={`${item.title}`}
      description={`${item.country}`}
    />
  );

  return (
    <>
      <View style={styles?.container}>
        <List data={clubsData(playerClubs)} renderItem={renderItem} />
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

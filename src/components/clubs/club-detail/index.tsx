import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Toggle,
  ListItem,
  List,
  Text,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { LargeImage } from "../image-item";
import { SelectPlayer } from "./select-player";
import { getClubDetailsByID } from "../../../utils/get-clubs-data";
import { Club } from "../../../types";
import { getClubPlayers } from "../../../utils/get-clubs-data";
import { playersData } from "../../../utils/get-players-data";
import { useSelector } from "react-redux";
const renderItem = ({ item, index }) => <ListItem title={`${item.title}`} />;

export const ClubDetail = (props) => {
  const state = useSelector((state) => state);
  const selectedSeason = state?.seasons?.selectedSeason;
  const clubs = state?.clubs;
  const players = state?.players;
  const clubID = props?.route?.params?.clubID;
  const clubDetails: Club = getClubDetailsByID(clubID, clubs);
  const playersInClub = getClubPlayers(players, clubDetails, selectedSeason);
  const transofrmedPlayersData = playersData(playersInClub);
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };
  console.log("selectedSeason", selectedSeason);
  return (
    <>
      <View style={styles?.topContainer}>
        {LargeImage(props, clubDetails?.logo)}
        <View style={styles?.middleContainer}>
          <Text category="h6">Club name: </Text>
          <Text category="h6"> {clubDetails?.name}</Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6">Club country: </Text>
          <Text category="h6"> {clubDetails?.country}</Text>
        </View>
        <List
          style={styles?.list}
          data={transofrmedPlayersData}
          renderItem={renderItem}
        />
        <Toggle checked={checked} onChange={onCheckedChange}>
          Associate new player to club
        </Toggle>
        <SelectPlayer disabled={checked} {...props} clubID={clubID} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  middleContainer: {
    flexDirection: "row",
  },
  list: {
    width: "100%",
  },
  toggle: {},
  filters: {
    flexDirection: "row",
  },
  filterSelect: {
    width: "70%",
  },
  resetFilterBtn: {
    width: "30%",
  },
});

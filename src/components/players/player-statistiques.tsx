import React, { useState } from "react";
import {
  Text,
  Divider,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import {
  getPlayerTotalGoals,
  getPlayerTotalMatches,
  getPlayerClubs,
  getPlayerGoalsStats,
  getPlayerMatchesStats,
} from "../../utils/get-players-data";
import {
  createSeaonTitleFromDates,
  selectedClubData,
  selectedSeasonData,
} from "../../utils/get-seasons-data";

const renderSeasons = (item) => {
  return (
    <SelectItem
      key={item?.id}
      title={createSeaonTitleFromDates(item?.startDate, item?.endDate)}
    />
  );
};

const renderClubs = (item) => {
  return <SelectItem key={item?.id} title={item?.name} />;
};
export const PlayerStats = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [selectedClub, setSelectedClub] = useState(new IndexPath(0));
  const state = useSelector((state) => state);
  const player = props?.route?.params?.data;
  const seasons = state?.seasons?.seasons;
  const clubs = state?.clubs;
  const selectedSeasonId = selectedSeasonData(selectedIndex?.row, seasons)?.id;
  const selectedClubId = selectedClubData(selectedClub?.row, clubs)?.id;
  const playerClubs = getPlayerClubs(player, clubs);

  return (
    <>
      <View style={{ ...styles?.middleContainer }}>
        <Text category="h6"> Name : </Text>
        <Text status="info" category="h6">
          {player?.name}
        </Text>
      </View>
      <View style={styles?.middleContainer}>
        <Text category="h6"> Last Name : </Text>
        <Text status="info" category="h6">
          {player?.lastName}
        </Text>
      </View>
      <View style={styles?.middleContainer}>
        <Text category="h6"> Total Matches : </Text>
        <Text category="h6">{getPlayerTotalMatches(player)}</Text>
      </View>
      <View style={styles?.middleContainer}>
        <Text category="h6"> Total Goals : </Text>
        <Text category="h6">{getPlayerTotalGoals(player)}</Text>
      </View>
      <Divider />

      <Select
        style={styles?.filterSelect}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        value={"SEASON"}
      >
        {state?.seasons?.seasons?.map(renderSeasons)}
      </Select>

      <Divider />
      <Select
        style={styles?.filterSelect}
        selectedIndex={selectedClub}
        onSelect={(index) => setSelectedClub(index)}
        value={"CLUB"}
      >
        {playerClubs?.map(renderClubs)}
      </Select>
      <View style={styles?.container}>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Matches (club|season) : </Text>
          <Text category="h6">
            {getPlayerMatchesStats(player, selectedSeasonId, selectedClubId)}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Goals (club|season): </Text>
          <Text category="h6">
            {getPlayerGoalsStats(player, selectedSeasonId, selectedClubId)}
          </Text>
        </View>
        <Divider />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
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
    width: "100%",
  },
  resetFilterBtn: {
    width: "30%",
  },
});

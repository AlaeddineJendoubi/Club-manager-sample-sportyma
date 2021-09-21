import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Toggle, List, ListItem, Text, Divider } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { filteredClubsData } from "../../utils";
import { ImageItem } from "../clubs/image-item";
import {
  playersStatsByClubs,
  playersStatsBySeason,
} from "../../utils/get-players-data";

export const Statistiques = (props) => {
  const renderSeasonsList = ({ item, index }) => {
    return (
      <>
        <View style={{ ...styles?.middleContainer }}>
          <Text category="h6"> Club name : </Text>
          <Text status="info" category="h6">
            {item?.season}
          </Text>
        </View>
        <View style={{ ...styles?.middleContainer }}>
          <Text category="h6"> Name : </Text>
          <Text status="info" category="h6">
            {item?.playerName}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Last Name : </Text>
          <Text status="info" category="h6">
            {item?.playerLastName}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Total Matches : </Text>
          <Text category="h6" status="info">
            {item?.nbrMatches}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Total Goals : </Text>
          <Text status="info" category="h6">
            {item?.nbrGoals}
          </Text>
        </View>
        <Divider style={styles?.devider} />
      </>
    );
  };
  const renderClubsList = ({ item, index }) => {
    return (
      <>
        <View style={{ ...styles?.middleContainer }}>
          <Text category="h6"> Season : </Text>
          <Text status="info" category="h6">
            {item?.clubName}
          </Text>
        </View>
        <View style={{ ...styles?.middleContainer }}>
          <Text category="h6"> Name : </Text>
          <Text status="info" category="h6">
            {item?.playerName}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Last Name : </Text>
          <Text status="info" category="h6">
            {item?.playerLastName}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Total Matches : </Text>
          <Text category="h6" status="info">
            {item?.nbrMatch}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Total Goals : </Text>
          <Text status="info" category="h6">
            {item?.nbrGoal}
          </Text>
        </View>
        <Divider style={styles?.devider} />
      </>
    );
  };

  const state = useSelector((state) => state);
  const [checked, setChecked] = useState(false);
  const [checkedClub, setCheckedClub] = useState(false);
  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };
  const onCheckeclubdChange = (isChecked) => {
    setCheckedClub(isChecked);
  };
  const playerStats = playersStatsBySeason(
    state?.players,
    state?.seasons?.seasons
  );

  return (
    <>
      <Toggle checked={checked} onChange={onCheckedChange}>
        {`Per season statistiques: ${checked}`}
      </Toggle>
      <Toggle checked={checkedClub} onChange={onCheckeclubdChange}>
        {`Per club statistiques: ${checkedClub}`}
      </Toggle>
      <View style={{ flexDirection: "column" }}>
        <List
          style={{ display: checked ? "flex" : "none" }}
          data={playersStatsBySeason(state?.players, state?.seasons?.seasons)}
          renderItem={renderSeasonsList}
        />
        <List
          style={{ display: checkedClub ? "flex" : "none" }}
          data={playersStatsByClubs(state?.players, state?.clubs)}
          renderItem={renderClubsList}
        />
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
    // alignItems: "center",
    alignContent: "space-around",
  },
  middleContainer: {
    flexDirection: "row",
    // alignSelf: "center",,
    alignContent: "space-around",
  },
  devider: {
    marginBottom: 20,
  },
});

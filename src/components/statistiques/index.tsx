import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { isNil } from "lodash";
import { Toggle, List, Button, Text, Divider } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import { filteredClubsData } from "../../utils";
import { ImageItem } from "../clubs/image-item";
import {
  playersStatsByClubs,
  playersStatsBySeason,
} from "../../utils/get-players-data";
import { saveGeneratedStats } from "../../utils/submit-stats-data";
import { isNullLiteral } from "@babel/types";

export const Statistiques = (props) => {
  const renderSeasonsList = ({ item, index }) => {
    return (
      <>
        <View style={{ ...styles?.middleContainer }}>
          <Text category="h6"> Season : </Text>
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
          <Text category="h6"> Club : </Text>
          <Text status="info" category="h6">
            {item?.clubName}
          </Text>
        </View>
        <View style={{ ...styles?.middleContainer }}>
          <Text category="h6"> Player name : </Text>
          <Text status="info" category="h6">
            {item?.playerName}
          </Text>
        </View>
        <View style={styles?.middleContainer}>
          <Text category="h6"> Player last name : </Text>
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
  const [isGenerated, setIsGenerated] = useState({ club: null, season: null });
  const dispatch = useDispatch();

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    setCheckedClub(!isChecked);
  };
  const onCheckeclubdChange = (isChecked) => {
    setCheckedClub(isChecked);
    setChecked(!isChecked);
  };

  const type =
    checkedClub === true ? "CLUB" : checked === true ? "SEASON" : null;
  const players = state?.players;
  const clubs = state?.clubs;
  const seasons = state?.seasons?.seasons;
  const stats = state?.statistiques;
  return (
    <>
      <View style={styles?.toggelContainer}>
        <Toggle
          checked={checked}
          onChange={onCheckedChange}
          style={styles?.toggle}
        >
          {`Per season `}
        </Toggle>
        <Toggle
          style={{ ...styles?.toggle, alignSelf: "flex-end" }}
          checked={checkedClub}
          onChange={onCheckeclubdChange}
        >
          {`Per club `}
        </Toggle>
      </View>
      <View style={{ flexDirection: "column" }}>
        <List
          style={{ display: checked ? "flex" : "none" }}
          data={
            isGenerated?.season === true
              ? playersStatsBySeason(players, seasons)
              : null
          }
          renderItem={renderSeasonsList}
        />
        <List
          style={{ display: checkedClub ? "flex" : "none" }}
          data={
            isGenerated?.club === true
              ? playersStatsByClubs(players, clubs)
              : null
          }
          renderItem={renderClubsList}
        />
      </View>
      {isNil(isGenerated?.club) || isNil(isGenerated?.season) ? (
        <Button
          appearance="outline"
          onPress={() => {
            type === "SEASON"
              ? setIsGenerated({ ...isGenerated, season: true })
              : type === "CLUB"
              ? setIsGenerated({ ...isGenerated, club: true })
              : null;
          }}
        >
          GENERATE {type} STATS
        </Button>
      ) : null}
      {checked === false && checkedClub === false ? null : (
        <Button
          disabled={!isGenerated?.club && !isGenerated?.season}
          style={styles.button}
          appearance="outline"
          onPress={() => {
            saveGeneratedStats(state, type, dispatch);
          }}
        >
          SAVE STATS
        </Button>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
  toggelContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  toggle: {
    margin: 2,
  },
  topContainer: {
    flexDirection: "column",
    alignContent: "space-around",
  },
  middleContainer: {
    flexDirection: "row",
    alignContent: "space-around",
  },
  devider: {
    marginBottom: 20,
  },
  button: {
    margin: 2,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});

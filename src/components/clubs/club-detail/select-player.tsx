import React, { useState, useEffect } from "react";
import {
  IndexPath,
  Select,
  SelectItem,
  Text,
  Button,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import {
  selectedPlayerData,
  updatePlayerData,
} from "../../../utils/get-players-data";
const renderOption = (item) => {
  return <SelectItem key={item?.id} title={item?.name} />;
};

export const SelectPlayer = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(-1));
  const [selectedPlayer, setSelectedPlayer] = useState("SELECT PLAYER");
  const state = props?.route?.params?.state;
  const players = state?.players;

  const dispatch = useDispatch();
  selectedPlayer;
  useEffect(() => {
    setSelectedPlayer(selectedPlayerData(selectedIndex?.row, players));
  });
  console.log(props.disabled);
  return (
    <View style={styles?.filters}>
      <Select
        disabled={!props?.disabled}
        style={styles?.filterSelect}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        value={selectedPlayer?.name}
      >
        {players.map(renderOption)}
      </Select>
      <Button
        disabled={!props?.disabled}
        style={styles?.resetFilterBtn}
        onPress={() =>
          updatePlayerData(dispatch, players, selectedPlayer, props?.clubID)
        }
      >
        VALIDATE
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
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

import React, { useState, useEffect } from "react";
import { IndexPath, Select, SelectItem, Button } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  createSeaonTitleFromDates,
  resetSelectedSeason,
  updateSelectedSeason,
} from "../../../utils/get-seasons-data";
const renderOption = (item) => {
  return (
    <SelectItem
      key={item?.id}
      title={createSeaonTitleFromDates(item?.startDate, item?.endDate)}
    />
  );
};

export const SelectSeason = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(-1));
  const seasons = props?.state?.seasons?.seasons;
  const dispatch = useDispatch();

  useEffect(() => {
    updateSelectedSeason(dispatch, selectedIndex?.row, seasons);
  }, [selectedIndex]);

  return (
    <View style={styles?.filters}>
      <Select
        style={styles?.filterSelect}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        value={"FILTER BY SEASON"}
      >
        {seasons.map(renderOption)}
      </Select>
      <Button
        style={styles?.resetFilterBtn}
        onPress={() => resetSelectedSeason(dispatch)}
      >
        RESET
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

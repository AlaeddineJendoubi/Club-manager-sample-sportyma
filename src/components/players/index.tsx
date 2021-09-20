import React from "react";
import { Button, Icon, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { playersData } from "../../utils/get-players-data";

const renderItemIcon = (props, item) => {
  return (
    <Icon
      {...props}
      name="activity-outline"
      onPress={() => props?.navigation.navigate("PLAYER STATS", { data: item })}
    />
  );
};

export const Players = (props) => {
  const state = useSelector((state) => state);

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title}`}
      accessoryRight={renderItemIcon(props, item)}
      description={"Total goals number : " + `${item.totalGoals}`}
      onPress={() => props?.navigation.navigate("PLAYER STATS", { data: item })}
    />
  );

  return (
    <>
      <View style={styles?.container}>
        <List data={playersData(state?.players)} renderItem={renderItem} />
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

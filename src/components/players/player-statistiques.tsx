import React from "react";
import { Button, Icon, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

export const PlayerStats = (props) => {
  return (
    <>
      <View style={styles?.container}>
        {/* <List data={playersData(state?.players)} renderItem={renderItem} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "black",
  },
});

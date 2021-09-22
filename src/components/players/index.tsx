import React from "react";
import { Button, Icon, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { playersData } from "../../utils/get-players-data";
import { addGeneratedPlayer } from "../../utils/generate-random-data";
import { isNil } from "lodash";
const renderItemIcon = (props, item) => {
  return (
    <Icon
      {...props}
      name="archive"
      onPress={() =>
        props?.navigation.navigate("PLAYER HISTORY", { data: item })
      }
    />
  );
};

export const Players = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const renderItem = ({ item, index }) => {
    const uniqueId = isNil(item?.uniqueId)
      ? "Player not associated to club"
      : "Player unique ID : " + `${item?.uniqueId}`;
    return (
      <ListItem
        title={`${item.title}`}
        accessoryRight={renderItemIcon(props, item)}
        description={uniqueId}
        onPress={() =>
          props?.navigation.navigate("PLAYER HISTORY", { data: item })
        }
      />
    );
  };

  return (
    <>
      <View style={styles?.container}>
        <List data={playersData(state?.players)} renderItem={renderItem} />
        <Button
          onPress={() => {
            state?.clubs?.length <= 0 === false
              ? addGeneratedPlayer(dispatch, state?.clubs)
              : alert("ADD CLUB FIRST");
          }}
        >
          GENERATE NEW PLAYER
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
});

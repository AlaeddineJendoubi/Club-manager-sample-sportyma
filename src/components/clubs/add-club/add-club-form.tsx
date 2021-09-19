import React, { useState } from "react";
import {
  Button,
  Input,
  IndexPath,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { clubLogosMapping, submitNewClubForm } from "../../../utils";
import { ImageItem } from "../image-item";
import { useDispatch, useSelector } from "react-redux";
import { truncate } from "lodash";

const renderLogosOption = (item) => (
  <SelectItem
    key={item?.id}
    title={item.title}
    accessoryLeft={(props) => ImageItem(props, item?.logo)}
  />
);

const renderSeasonOption = (item) => {
  return (
    <SelectItem
      key={item?.id}
      title={
        "From : " +
        truncate(item?.startDate, { length: 18 }) +
        "To : " +
        truncate(item?.endDate, { length: 18 })
      }
    />
  );
};

export const AddClubForm = (props) => {
  const [newClub, setNewClub] = useState({ name: "", logo: "", country: "" });
  const [selectedLogoIndex, setSelectedLogoIndex] = useState(new IndexPath(0));
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(
    new IndexPath(0)
  );
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <>
      <Text style={styles.title} category="h5" status="info">
        FILL THE FORM TO ADD A CLUB
      </Text>
      <Text style={styles.warning} status="warning">
        NOTE: ALL FIELDS ARE REQUIRED
      </Text>
      <View style={styles?.container}>
        <Input
          style={styles?.select}
          size="medium"
          placeholder="Input club name"
          onChangeText={(text) => setNewClub({ ...newClub, name: text })}
        />
        {newClub?.name === "" ? (
          <Text style={styles.error} status="danger">
            ** Club name is required
          </Text>
        ) : null}
        <Input
          style={styles?.select}
          size="medium"
          placeholder="Input country "
          onChangeText={(text) => setNewClub({ ...newClub, country: text })}
        />

        {newClub?.country === "" ? (
          <Text style={styles.error} status="danger">
            ** Club country is required
          </Text>
        ) : null}
        <Select
          label={"Select logo"}
          style={styles?.select}
          selectedIndex={selectedLogoIndex}
          onSelect={(index) => setSelectedLogoIndex(index)}
        >
          {clubLogosMapping.map(renderLogosOption)}
        </Select>

        <Select
          label={"Select season"}
          style={styles?.select}
          selectedIndex={selectedSeasonIndex}
          onSelect={(index) => setSelectedSeasonIndex(index)}
        >
          {state?.seasons?.seasons.map(renderSeasonOption)}
        </Select>
        <Button
          style={styles?.button}
          status="primary"
          onPress={() =>
            submitNewClubForm(
              newClub,
              selectedLogoIndex,
              selectedSeasonIndex?.row + 1,
              dispatch
            )
          }
        >
          ADD CLUB
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    textAlign: "center",
    margin: 4,
  },
  warning: {
    textAlign: "center",
  },
  error: {
    fontSize: 13,
  },
  button: {
    margin: 13,
  },
  select: {
    margin: 13,
  },
});

import React from "react";
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  Divider,
} from "@ui-kitten/components";

const SettingsIcon = (props) => (
  <Icon
    onPress={() => {
      props?.navigation?.navigate("ADD NEW CLUB");
    }}
    {...props}
    name="plus-square-outline"
  />
);

export const AddClubTopBar = (props) => {
  const renderSettingsAction = () => (
    <TopNavigationAction icon={SettingsIcon(props)} />
  );

  return (
    <>
      <TopNavigation title="SPORTYMA" accessoryRight={renderSettingsAction} />
      <Divider />
    </>
  );
};

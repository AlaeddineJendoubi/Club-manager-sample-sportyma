import React from "react";
import { Avatar } from "@ui-kitten/components";

import { clubLogosMapping } from "../../utils";

/**
 * Club logo image componenets
 * @param  logoSrc source of the logo
 * @returns an image componenet with the inputed source
 */
export const ImageItem = (props, id) => {
  return (
    <Avatar
      {...props}
      style={[props.style, { tintColor: null }]}
      source={JSON.stringify(clubLogosMapping[id - 1]?.logo)}
    />
  );
};

/**
 * Club logo image componenets
 * @param  logoSrc source of the logo
 * @returns an image componenet with the inputed source
 */
export const LargeImage = (props, id) => {
  return (
    <Avatar
      {...props}
      style={[
        props.style,
        { tintColor: null, height: 200, width: 200, alignSelf: "center" },
      ]}
      source={JSON.stringify(clubLogosMapping[id - 1]?.logo)}
    />
  );
};

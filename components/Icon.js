import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

const Icon = ({ iconsize, iconname }) => {
  return <FontAwesome5 name={iconname} size={iconsize} color={colors.white} />;
};

export default Icon;

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "../../Icon";
import colors from "../../../assets/colors/colors";

const ContentHeader = (props) => {
  return (
    <View style={styles.categoryContainer}>
      <Icon iconsize={40} iconname={props.icon} />
      <Text style={[styles.logoText]}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoText: {
    paddingLeft: 20,
    fontFamily: "Boogaloo_400Regular",
    color: colors.white,
    fontSize: 40,
  },
});

export default ContentHeader;

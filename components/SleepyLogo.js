import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

const SleepyLogo = ({ fontsize }) => {
  return (
    <View>
      <Text style={[styles.logoText, { fontSize: fontsize }]}>Sleepy TV</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontFamily: "Boogaloo_400Regular",
    color: colors.white,
  },
});

export default SleepyLogo;

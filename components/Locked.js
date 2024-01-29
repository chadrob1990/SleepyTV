import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import Icon from "./Icon";
import colors from "../assets/colors/colors";

const Locked = (props) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.locked) {
      Animated.timing(opacity, {
        toValue: 0.8,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    } else {
      opacity.setValue(0);
    }
  }, [props.locked, opacity]);

  return (
    <Animated.View style={[styles.dimmer, { opacity: opacity }]}>
      <Animated.View
        style={[
          styles.lockContainer,
          { opacity: Animated.subtract(opacity, 0.6) },
        ]}
      >
        <Icon iconsize={50} iconname={"lock"} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dimmer: {
    backgroundColor: colors.black,
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
  },
  lockContainer: {
    bottom: 40,
    left: 40,
    position: "fixed",
  },
});

export default Locked;

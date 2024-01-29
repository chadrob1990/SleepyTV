import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Modal,
  Text,
  Pressable,
  StyleSheet,
  AppState,
  Platform,
} from "react-native";
import { updateTimer } from "../utils/timer/updateTimer";
import Icon from "./Icon";
import colors from "../assets/colors/colors";

const resetTimer = (increase, uiTimer, setUITimer, setLocked, setData) => {
  let newtime;
  if (increase) {
    if (uiTimer < 15) {
      newtime = 15;
    } else {
      newtime = uiTimer + 15;
    }
    updateTimer(setLocked, newtime, setUITimer);
  } else {
    if (uiTimer < 15) {
      newtime = 0;
    } else {
      newtime = Math.round(uiTimer / 15) * 15 - 15;
    }
    updateTimer(setLocked, newtime, setUITimer);
  }
};

const Menu = (props) => {
  const [button, setButton] = useState("button1");
  const buttonRefs = {
    button1: useRef(null),
    button2: useRef(null),
    button3: useRef(null),
  };

  const focusButton = (buttonRef) => {
    if (buttonRef) {
      buttonRef.current.focus();
    }
  };

  useEffect(() => {
    if (!props.isDrawerOpen) {
      return;
    }
    focusButton(Object.values(buttonRefs)[0]);

    const handleKeyDown = (e) => {
      switch (e.nativeEvent.key) {
        case "ArrowLeft":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[0]);
            setButton("button1");
          }
          break;
        case "left":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[0]);
            setButton("button1");
          }
          break;
        case "KEYCODE_DPAD_LEFT":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[0]);
            setButton("button1");
          }
          break;
        case "ArrowRight":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[1]);
            setButton("button2");
          }
          break;
        case "right":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[1]);
            setButton("button2");
          }
          break;
        case "KEYCODE_DPAD_RIGHT":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[1]);
            setButton("button2");
          }
          break;
        case "ArrowDown":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[2]);
            setButton("button3");
          }
          break;
        case "down":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[2]);
            setButton("button3");
          }
          break;
        case "KEYCODE_DPAD_DOWN":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[2]);
            setButton("button3");
          }
          break;
        case "ArrowUp":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[0]);
            setButton("button1");
          }
          break;
        case "up":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[0]);
            setButton("button1");
          }
          break;
        case "KEYCODE_DPAD_UP":
          if (document.activeElement) {
            focusButton(Object.values(buttonRefs)[0]);
            setButton("button1");
          }
          break;
        default:
          break;
      }
    };
    if (Platform.OS === "web") {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      AppState.addEventListener("change", handleKeyDown);
    }

    return () => {
      if (Platform.OS === "web") {
        window.removeEventListener("keydown", handleKeyDown);
      } else {
        AppState.removeEventListener("change", handleKeyDown);
      }
    };
  }, [props.isDrawerOpen]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.isDrawerOpen}
      onRequestClose={props.toggleDrawer}
    >
      <View style={styles.drawerContainer}>
        <View style={styles.drawerHeader}>
          <Icon iconsize={45} iconname={"hourglass"} />
          <Text style={[styles.logoText]}>Video Timer</Text>
        </View>
        <View style={styles.minutesHeader}>
          <Pressable
            ref={buttonRefs.button1}
            onPress={() =>
              resetTimer(
                true,
                props.uiTimer,
                props.setUITimer,
                props.setLocked,
                props.setData
              )
            }
            style={[
              styles.minuteButtonLeft,
              button === "button1"
                ? { backgroundColor: colors.focuscolor }
                : { backgroundColor: colors.maintheme },
            ]}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          <View style={styles.minutesContainer}>
            {props.uiTimer > 1 ? (
              <Text style={styles.minutesText}>{props.uiTimer} Minutes</Text>
            ) : (
              <Text style={styles.minutesText}>{props.uiTimer} Minute</Text>
            )}
          </View>
          <Pressable
            ref={buttonRefs.button2}
            onPress={() =>
              resetTimer(
                false,
                props.uiTimer,
                props.setUITimer,
                props.setLocked,
                props.setData
              )
            }
            style={[
              styles.minuteButtonRight,
              button === "button2"
                ? { backgroundColor: colors.focuscolor }
                : { backgroundColor: colors.maintheme },
            ]}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
        <Pressable
          ref={buttonRefs.button3}
          onPress={props.toggleDrawer}
          style={[
            styles.doneButton,
            button === "button3"
              ? { backgroundColor: colors.focuscolor }
              : { backgroundColor: colors.maintheme },
          ]}
        >
          <Text style={styles.buttonText}>Done</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "30%",
    padding: 20,
    position: "absolute",
    height: 370,
    alignSelf: "center",
    top: "30%",
    borderRadius: 23,
    borderWidth: 5,
    borderColor: colors.white,
    backgroundColor: colors.maintheme,
    boxShadowColor: "#000",
    boxShadowOffset: { width: 0, height: 1 },
    boxShadowOpacity: 0.8,
    boxShadowRadius: 2,
    elevation: 5,
    alignItems: "center",
  },
  doneButton: {
    marginTop: 50,
    padding: 10,
    backgroundColor: colors.maintheme,
    borderColor: colors.white,
    borderWidth: 3,
    borderRadius: 10,
    width: 130,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  minuteButtonLeft: {
    borderColor: colors.white,
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: "100%",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  minuteButtonRight: {
    borderColor: colors.white,
    borderWidth: 3,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: "100%",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Boogaloo_400Regular",
    color: colors.white,
    fontSize: 25,
  },
  logoText: {
    paddingLeft: 10,
    fontFamily: "Boogaloo_400Regular",
    color: colors.white,
    fontSize: 40,
  },
  drawerHeader: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  minutesHeader: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 65,
  },
  minutesContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    height: "100%",
    width: 140,
  },
  minutesText: {
    fontFamily: "Boogaloo_400Regular",
    color: colors.maintheme,
    fontSize: 25,
  },
});

export default Menu;

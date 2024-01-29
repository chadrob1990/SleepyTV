import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, FlatList, Platform, AppState } from "react-native";
import ContentView from "./components/ContentView";

const ContentList = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let thisData;
  let lockedData;
  const data = props.data;
  const flatListRef = useRef(null);

  if (data) {
    lockedData = data.filter((item) => !item.lockable);
  }

  useEffect(() => {}, [data]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (Platform.OS === "web") {
        e.preventDefault();
      }
      if (props.isDrawerOpen) {
        return;
      }
      if (props.data) {
        if (props.locked) {
          thisData = lockedData;
        } else {
          thisData = data;
        }
        const windowHeight = props.windowHeight;
        if (
          e.nativeEvent.key === "ArrowUp" ||
          e.nativeEvent.key === "up" ||
          e.nativeEvent.key === "KEYCODE_DPAD_UP"
        ) {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? thisData.length - 1 : prevIndex - 1
          );
          window.scrollTo({
            top:
              ((currentIndex - 1 + thisData.length) % thisData.length) *
              windowHeight,
            behavior: "smooth",
          });
        } else if (
          e.nativeEvent.key === "ArrowDown" ||
          e.nativeEvent.key === "down" ||
          e.nativeEvent.key === "KEYCODE_DPAD_DOWN"
        ) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % thisData.length);
          window.scrollTo({
            top: ((currentIndex + 1) % thisData.length) * windowHeight,
            behavior: "smooth",
          });
        }
      }
    };
    if (Platform.OS === "web") {
      window.addEventListener("keydown", handleKeyPress);
    } else {
      AppState.addEventListener("change", handleKeyPress);
    }

    return () => {
      if (Platform.OS === "web") {
        window.removeEventListener("keydown", handleKeyPress);
      } else {
        AppState.removeEventListener("change", handleKeyPress);
      }
    };
  }, [props.data, currentIndex, setCurrentIndex, props.isDrawerOpen]);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={props.locked ? lockedData : data}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment={"start"}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            <ContentView
              selectedlist={index == currentIndex ? true : false}
              index={index}
              listindex={currentIndex}
              item={item}
              windowHeight={props.windowHeight}
              setVideoPlayer={props.setVideoPlayer}
              setVideoID={props.setVideoID}
              isDrawerOpen={props.isDrawerOpen}
            />
          </>
        )}
        extraData={props.locked ? lockedData : data}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContentList;

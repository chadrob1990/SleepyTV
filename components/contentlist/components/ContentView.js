import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  AppState,
  Platform,
} from "react-native";
import ContentHeader from "./ContentHeader";
import ContentThumbnail from "./ContentThumbnail";

const ContentView = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef(null);
  let ITEM_WIDTH = 500;
  let ITEM_HEIGHT = 280;
  let CONTENT_PADDING = 200;
  const data = props.item.content;

  const scrollToIndex = (index) => {
    setSelectedVideoID(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const openVideoPlayer = () => {
    props.setVideoPlayer(true);
  };

  const setSelectedVideoID = (index) => {
    if (props.selectedlist) {
      if (data.length > 0) {
        if (data[index].snippet) {
          if (data[index].snippet.resourceId) {
            if (data[index].snippet.resourceId.videoId) {
              props.setVideoID(data[index].snippet.resourceId.videoId);
            }
          }
        }
      }
    }
  };

  const handleKeyPress = (e) => {
    if (props.isDrawerOpen) {
      return;
    }
    if (data && props.selectedlist) {
      if (
        e.nativeEvent.key === "ArrowRight" ||
        e.nativeEvent.key === "right" ||
        e.nativeEvent.key === "KEYCODE_DPAD_RIGHT"
      ) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        scrollToIndex((currentIndex + 1) % data.length);
      } else if (
        e.nativeEvent.key === "ArrowLeft" ||
        e.nativeEvent.key === "left" ||
        e.nativeEvent.key === "KEYCODE_DPAD_LEFT"
      ) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
        scrollToIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
      } else if (
        e.nativeEvent.key === "Enter" ||
        e.nativeEvent.key === "focus" ||
        e.nativeEvent.key === "KEYCODE_DPAD_CENTER"
      ) {
        setSelectedVideoID(currentIndex);
        openVideoPlayer();
      }
    }
  };

  useEffect(() => {
    setSelectedVideoID(0);
  }, []);

  useEffect(() => {
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
  }, [currentIndex, props.listindex, props.isDrawerOpen]);

  return (
    <View style={[styles.container, { height: props.windowHeight }]}>
      <View style={{ height: ITEM_HEIGHT + 250 }}>
        <View
          style={{
            paddingLeft: CONTENT_PADDING,
            paddingBottom: 30,
            position: "absolute",
          }}
        >
          <ContentHeader name={props.item.name} icon={props.item.icon} />
        </View>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          snapToAlignment={"start"}
          contentContainerStyle={{ marginLeft: CONTENT_PADDING }}
          renderItem={({ item, index }) => (
            <View style={[{ justifyContent: "center" }]}>
              <Pressable
                onPress={() => {
                  openVideoPlayer();
                }}
              >
                <ContentThumbnail
                  item={item}
                  selected={index === currentIndex ? true : false}
                  selectedlist={props.selectedlist}
                  itemwidth={ITEM_WIDTH}
                  itemheight={ITEM_HEIGHT}
                />
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default ContentView;

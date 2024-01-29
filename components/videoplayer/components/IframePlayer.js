import React from "react";
import { StyleSheet } from "react-native";

const ContentList = (props) => {
  return (
    <iframe
      style={styles.iframe}
      src={
        "https://www.youtube.com/embed/" +
        props.videoID +
        "?&autoplay=1&showinfo=1&controls=0&fullscreen=1"
      }
      allowFullScreen
      allow="autoplay"
    />
  );
};

const styles = StyleSheet.create({
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
});

export default ContentList;

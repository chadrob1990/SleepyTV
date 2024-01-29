import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import IframePlayer from "./components/IframePlayer";

const VideoPlayer = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.webTrailerContainer]}>
        <IframePlayer videoID={props.videoID} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  webTrailerContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    paddingTop: "50%",
    alignSelf: "center",
  },
});

export default VideoPlayer;

// import { Video, ResizeMode } from "expo-av";
// import { WebView } from "react-native-webview";
// import YoutubePlayer from "react-native-youtube-iframe";
// const video = React.useRef(null);
// const [status, setStatus] = React.useState({});

{
  /* <WebView
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        source={{
          uri: "https://www.youtube.com/embed/mLI_QxszYrU?si=Hsw_vKkTjPf-zz63",
        }}
      /> */
}
{
  /* <YoutubePlayer
        height={300}
        // play={playing}
        videoId={"iee2TATGMyI"}
        // onChangeState={onStateChange}
      /> */
}

import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { generateLists } from "./utils/generatelists/generateLists";
import { getWindowDimensions } from "./utils/getWindowDimensions";
import colors from "./assets/colors/colors";

// Timer
import { setTimer } from "./utils/timer/setTimer";
import timerData from "./assets/data/timerData";

// UI
import SleepyLogo from "./components/SleepyLogo";
import ContentList from "./components/contentlist/Index";
import VideoPlayer from "./components/videoplayer/Index";
import Locked from "./components/Locked";
import Menu from "./components/Menu";

// Fonts
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Boogaloo_400Regular } from "@expo-google-fonts/boogaloo";

const App = () => {
  const [data, setData] = useState();
  const [uiTimer, setUITimer] = useState(false);
  const [locked, setLocked] = useState(false);
  const [videoPlayer, setVideoPlayer] = useState(false);
  const [videoID, setVideoID] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("window").height
  );

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Boogaloo_400Regular,
  });

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const fetchData = async () => {
      try {
        const generatedData = await generateLists();
        setData(generatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    if (
      timerData[0].today ===
      currentMonth + "/" + currentDay + "/" + currentYear
    ) {
      setUITimer(timerData[0].time_left / 1000 / 60);
    } else {
      timerData[0].today = currentMonth + "/" + currentDay + "/" + currentYear;
      timerData[0].time_left = timerData[0].time_limit;
      setUITimer(timerData[0].time_limit / 1000 / 60);
    }

    getWindowDimensions(setWindowHeight);
  }, []);

  useEffect(() => {
    if (uiTimer) {
      setTimer(setLocked, setUITimer);
    }
  }, [uiTimer]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      e.preventDefault();
      if (e.nativeEvent.key === "M") {
        console.log("M");
        toggleDrawer();
      }
      if (e.nativeEvent.key === "Escape") {
        console.log("Escape key pressed");
        setVideoPlayer(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    console.log(isDrawerOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isDrawerOpen, videoPlayer]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/backgrounds/sleepytv_background_big.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <SleepyLogo fontsize={60} />
        </View>
      </ImageBackground>
      {videoPlayer ? (
        <VideoPlayer
          windowHeight={windowHeight}
          videoID={videoID}
          setIsDrawerOpen={setIsDrawerOpen}
          setVideoPlayer={setVideoPlayer}
          toggleDrawer={setVideoPlayer}
        />
      ) : (
        <ContentList
          data={data}
          windowHeight={windowHeight}
          setVideoPlayer={setVideoPlayer}
          setVideoID={setVideoID}
          locked={locked}
          isDrawerOpen={isDrawerOpen}
        />
      )}
      {locked ? (
        <>
          <Locked
            locked={locked}
            data={data}
            setData={setData}
            uiTimer={uiTimer}
          />
        </>
      ) : (
        <></>
      )}
      {isDrawerOpen ? <View style={styles.dimmer} /> : <></>}
      <Menu
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        toggleDrawer={toggleDrawer}
        setLocked={setLocked}
        uiTimer={uiTimer}
        setUITimer={setUITimer}
        setData={setData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "fixed",
    width: "105%",
    height: "100%",
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentContainer: {
    paddingTop: 100,
  },
  logoContainer: {
    top: 60,
    right: 100,
    opacity: 0.6,
    position: "fixed",
  },
  dimmer: {
    backgroundColor: colors.darkmaintheme,
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    opacity: 0.8,
  },
});

export default App;

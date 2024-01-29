import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";

const ContentThumbnail = (props) => {
  const originalTitle = props.item.snippet.title;
  const modifiedTitle = originalTitle.replace(/\s*\[4K\]\s*/, "");
  const name = modifiedTitle;
  let url;

  if (props.item.snippet.thumbnails.high) {
    url = props.item.snippet.thumbnails.high.url;
  } else if (props.item.snippet.thumbnails.medium) {
    url = props.item.snippet.thumbnails.medium;
  }

  return (
    <View>
      <View
        style={[
          styles.thumbnail,
          props.selected
            ? {
                borderColor: colors.focuscolor,
                borderWidth: 9,
              }
            : { borderColor: colors.maintheme, borderWidth: 9 },
        ]}
      >
        <View
          style={[
            {
              width: props.itemwidth,
              height: props.itemheight,
            },
          ]}
        >
          <Image
            source={url}
            style={[styles.image, { width: "100%", height: "100%" }]}
          />
        </View>
      </View>
      <Text
        numberOfLines={1}
        style={[
          styles.thumbnailTitle,
          { fontSize: 30, width: props.itemwidth - 50 },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor: colors.white,
    borderRadius: 19,
    marginRight: 60,
    overflow: "hidden",
  },
  thumbnailTitle: {
    color: colors.white,
    paddingTop: 12,
    fontFamily: "Boogaloo_400Regular",
  },
  image: {
    overflow: "hidden",
  },
});

export default ContentThumbnail;

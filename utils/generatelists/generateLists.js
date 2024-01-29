import testData from "../../assets/data/testData";
import { fetchYouTubePlaylistItems } from "./fetchYouTubePlaylistItems";
import { fetchYouTubePlaylistName } from "./fetchYouTubePlaylistName";
import { fetchImages } from "./fetchImages";

const generateLists = async () => {
  try {
    const updatedTestData = await Promise.all(
      testData.map(async (item) => {
        if (item.type === "videos") {
          if (item.playlist_id) {
            const playlistItems = await fetchYouTubePlaylistItems(
              item.playlist_id
            );
            const playlistName = await fetchYouTubePlaylistName(
              item.playlist_id
            );
            let modifiedTitle = playlistName.items[0].snippet.title.replace(
              /ASMR/gi,
              ""
            );
            return {
              ...item,
              name: modifiedTitle,
              content: playlistItems.items || [],
            };
          }
        }
        if (item.type === "photos") {
          const images = fetchImages("../assets/images/album");
          return {
            ...item,
            content: images || [],
          };
        }
        console.log(item);
        return item;
      })
    );
    return updatedTestData;
  } catch (error) {
    console.error("Error generating lists:", error);
  }
};

export { generateLists };

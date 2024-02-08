import { apiKey } from "./key";

const apiUrl = "https://youtube.googleapis.com/youtube/v3/playlists";

const fetchYouTubePlaylistName = async (playlistId) => {
  try {
    const response = await fetch(
      `${apiUrl}?part=snippet&id=${playlistId}&key=${apiKey}`,
      {
        headers: {
          Authorization: "Bearer",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching playlist items:", error);
  }
};

export { fetchYouTubePlaylistName };

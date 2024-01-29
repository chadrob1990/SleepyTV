const apiUrl = "https://youtube.googleapis.com/youtube/v3/playlistItems";
const apiKey = "AIzaSyAOYNXxXjZus99aUs3CZfDkpaofX_eAO0k";

const fetchYouTubePlaylistItems = async (playlistId) => {
  try {
    const response = await fetch(
      `${apiUrl}?part=snippet&&maxResults=20&playlistId=${playlistId}&key=${apiKey}`,
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
    let filteredData;
    let filteredItems;
    let modifiedItems;
    let modifiedData;
    if (data.items.length > 0) {
      filteredItems = data.items.filter(
        (item) => item.snippet.title !== "Deleted video"
      );
      filteredData = { ...data, items: filteredItems };
      modifiedItems = filteredItems.map((item) => ({
        ...item,
        snippet: {
          ...item.snippet,
          title: item.snippet.title.replace(/ASMR/gi, ""),
        },
      }));
      modifiedData = { ...data, items: modifiedItems };
    }

    return modifiedData;
  } catch (error) {
    console.error("Error fetching playlist items:", error);
  }
};

export { fetchYouTubePlaylistItems };

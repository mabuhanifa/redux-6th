import axios from "../../utils/axios";

export const getVideos = async (tags, search, authors) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (authors && authors !== "") {
    queryString += `&author_like=${authors}`;
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }

  console.log(queryString);
  const response = await axios.get(`/videos/?${queryString}`);

  return response.data;
};

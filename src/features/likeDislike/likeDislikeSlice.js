const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
// async thunk
export const fetchLikes = createAsyncThunk(
  "likes/fetchLikes",
  async ({ videoId, amount, likes }) => {
    const response = await fetch(`https://lwsreduxjson.herokuapp.com/videos/${videoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        likes: likes + amount,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  }
);
export const fetchDisLikes = createAsyncThunk(
  "dislikes/fetchDisLikes",
  async ({ videoId, amount, unlikes }) => {
    const response = await fetch(`https://lwsreduxjson.herokuapp.com/videos/${videoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        unlikes: unlikes + amount,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  }
);


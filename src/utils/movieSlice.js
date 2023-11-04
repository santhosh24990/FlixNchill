import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    videoDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addVideodetails: (state, action) => {
      state.videoDetails = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addVideodetails } = movieSlice.actions;
export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    recommendedMovies: null,
  },
  reducers: {
    addRecommendedmovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
  },
});

export const { addRecommendedmovies } = gptSlice.actions;
export default gptSlice.reducer;

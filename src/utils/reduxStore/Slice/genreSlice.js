import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genre",
  initialState: {
    genreDetails: null,
    moviesByGenre: null,
  },
  reducers: {
    addGenreDetails: (state, action) => {
      state.genreDetails = action.payload;
    },
    toggleGenre: (state) => {
      state.togglegenre = !state.togglegenre;
    },
  },
});

export const { addGenreDetails, addMovieByGenre } = genreSlice.actions;
export default genreSlice.reducer;

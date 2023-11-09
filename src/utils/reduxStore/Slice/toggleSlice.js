import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleHome: true,
    toggleGenre: false,
    toggleGpt: false,
  },
  reducers: {
    setToggleHome: (state) => {
      state.toggleHome = true;
      state.toggleGenre = false;
      state.toggleGpt = false;
    },
    setToggleGenre: (state) => {
      state.toggleHome = false;
      state.toggleGenre = true;
      state.toggleGpt = false;
    },
    setToggleGpt: (state) => {
      state.toggleHome = false;
      state.toggleGenre = false;
      state.toggleGpt = true;
    },
  },
});

export const { setToggleHome, setToggleGenre, setToggleGpt } =
  toggleSlice.actions;
export default toggleSlice.reducer;

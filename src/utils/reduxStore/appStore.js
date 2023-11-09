import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import moviesReducer from "./Slice/movieSlice";
import genreReducer from "./Slice/genreSlice";
import toggleReducer from "./Slice/toggleSlice";
import gptReducer from "./Slice/gptSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    genre: genreReducer,
    toggle: toggleReducer,
    gpt: gptReducer,
  },
});

export default appStore;

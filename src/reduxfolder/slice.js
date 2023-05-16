import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "movie",
  initialState: {
    movies: [{ Poster: "", Title: "", Type: "", Year: "" }],
  },
  reducers: {
    addmovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export default movieslice.reducer;
export let { addmovies } = movieslice.actions;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNovPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        }
    }

})

export const { addNovPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trendingMovies: null,
        recommendedMovies: null,
        topRatedMovie: null

    },
    reducers: {
        addNovPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMpvies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload
        }
    }

})

export const { addNovPlayingMovies, addPopularMpvies, addTrendingMovies, addRecommendedMovies, addTopRatedMovie } = movieSlice.actions;

export default movieSlice.reducer;
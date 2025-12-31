import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTrendingMovies = () => {
    const apiKey = "aad3dd99";

    const dispatch = useDispatch()
    const nowrtrendingMovies = useSelector(store => store.movies.trendingMovies)

    const nowPlayingMovies = async () => {
        let movies = [];

        for (let page = 1; page <= 2; page++) { // 20 results per term
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${apiKey}&s=avengers&page=${page}&plot=full`
            );
            const data = await response.json();

            if (data.Search) {
                movies = movies.concat(data.Search);
            }


        }
        dispatch(addTrendingMovies(movies))

    }

    useEffect(() => {
        !nowrtrendingMovies && nowPlayingMovies()
    }, [])

}

export default useTrendingMovies;
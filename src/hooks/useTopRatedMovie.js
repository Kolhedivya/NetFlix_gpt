import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTopRatedMovie = () => {
    const apiKey = "aad3dd99";

    const dispatch = useDispatch()
    const nowrtopRatedMovies = useSelector(store => store.movies.topRatedMovie)

    const nowPlayingMovies = async () => {
        let movies = [];

        for (let page = 1; page <= 2; page++) { // 20 results per term
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${apiKey}&s=iron man&page=${page}&plot=full`
            );
            const data = await response.json();

            if (data.Search) {
                movies = movies.concat(data.Search);
            }


        }
        dispatch(addTopRatedMovie(movies))

    }

    useEffect(() => {
        !nowrtopRatedMovies && nowPlayingMovies()
    }, [])

}

export default useTopRatedMovie;
import { useDispatch } from "react-redux";
import { addNovPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const apiKey = "aad3dd99";

    const dispatch = useDispatch()

    const nowPlayingMovies = async () => {
        let movies = [];

        for (let page = 1; page <= 2; page++) { // 20 results per term
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${apiKey}&s="stranger things"&page=${page}&plot=full`
            );
            const data = await response.json();

            if (data.Search) {
                movies = movies.concat(data.Search);
            }


        }
        dispatch(addNovPlayingMovies(movies))
        console.log(movies); // array of at least 20 movies
    }

    useEffect(() => {
        nowPlayingMovies()
    }, [])

}

export default useNowPlayingMovies;
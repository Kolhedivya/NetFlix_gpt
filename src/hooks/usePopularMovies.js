import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMpvies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const apiKey = "aad3dd99";

    const dispatch = useDispatch()

    const nowPlayingMovies = async () => {
        let movies = [];

        for (let page = 1; page <= 2; page++) { // 20 results per term
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${apiKey}&s=batman&page=${page}&plot=full`
            );
            const data = await response.json();

            if (data.Search) {
                movies = movies.concat(data.Search);
            }


        }
        dispatch(addPopularMpvies(movies))

    }

    useEffect(() => {
        nowPlayingMovies()
    }, [])
}

export default usePopularMovies;
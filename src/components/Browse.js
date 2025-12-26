
import { useEffect } from 'react';
import Header from './Header'

const Browse = () => {

    const apiKey = "aad3dd99";
    // const searchTerms = ["batman", "superman", "avengers"]; // multiple terms

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

        console.log(movies); // array of at least 20 movies
    }

    useEffect(() => {
        nowPlayingMovies()
    }, [])


    return (
        <div><Header />

        </div>

    )
}

export default Browse
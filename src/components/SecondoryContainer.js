import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondoryContainer = () => {
    const movies = useSelector(store => store.movies);

    if (!movies) return;



    return (
        <div className="bg-black">
            <div className="-mt-52 p-12 relative z-20">
                {movies?.nowPlayingMovies && <MovieList movies={movies?.nowPlayingMovies} title="Now Playing Movies" />}
                <MovieList movies={movies?.popularMovies} title="Recommended Movies" />
                <MovieList movies={movies?.trendingMovies} title="Trending Movies" />
                <MovieList movies={movies?.recommendedMovies} title="Popular Movies" />
                <MovieList movies={movies?.topRatedMovie} title="Top Rated Movies" />
            </div>
        </div>
    )
}

export default SecondoryContainer
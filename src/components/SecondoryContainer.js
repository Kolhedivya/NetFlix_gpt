import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondoryContainer = () => {
    const movies = useSelector(store => store.movies);

    if (!movies) return;



    return (
        <div className="bg-black">
            <div className="max-sm:-mt-[38%]  md:-mt-[11%] pl-12 relative z-20">
                {movies?.nowPlayingMovies && <MovieList movies={movies?.nowPlayingMovies} title="Now Playing Movies" />}
                {movies?.popularMovies && <MovieList movies={movies?.popularMovies} title="Recommended Movies" />}
                {movies?.trendingMovies && <MovieList movies={movies?.trendingMovies} title="Trending Movies" />}
                {movies?.recommendedMovies && <MovieList movies={movies?.recommendedMovies} title="Popular Movies" />}
                {movies?.topRatedMovie && <MovieList movies={movies?.topRatedMovie} title="Top Rated Movies" />}
            </div>
        </div>
    )
}

export default SecondoryContainer
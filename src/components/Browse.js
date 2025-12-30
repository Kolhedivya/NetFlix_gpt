

import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useRecommendedMovies from '../hooks/useRecommendedMovies.js';
import useTrendingMovies from '../hooks/useTrendingMovies.js'
import MainContainer from './MainContainer.js';
import SecondoryContainer from './SecondoryContainer.js';
import useTopRatedMovie from '../hooks/useTopRatedMovie.js';


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useRecommendedMovies();
    useTrendingMovies();
    useTopRatedMovie();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondoryContainer />
        </div>
    )
}

export default Browse
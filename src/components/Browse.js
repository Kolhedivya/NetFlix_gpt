

import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';
import SecondoryContainer from './SecondoryContainer.js';


const Browse = () => {
    useNowPlayingMovies()
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondoryContainer />
        </div>
    )
}

export default Browse
import React from 'react'
import { useSelector } from 'react-redux'
import VedioTitle from './VedioTitle'
import VedioBackground from './VedioBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return
    const { Title, Year } = movies[0];
    return (
        <div>
            <VedioTitle title={Title} year={Year} />
            <VedioBackground />
        </div>
    )
}

export default MainContainer
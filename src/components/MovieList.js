
import { MovieCard } from './MovieCard'

const MovieList = ({ movies, title }) => {


    return (
        <div className='p-6 '>
            <h1 className=' text-white text-2xl font-bold  py-5'>{title}</h1>
            <div className='flex overflow-x-scroll'>

                <div className='flex'>
                    {movies.map((movie, i) => <MovieCard key={i} Poster={movie.Poster} Title={movie.Title} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
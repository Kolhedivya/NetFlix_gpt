
import { MovieCard } from './MovieCard'

const MovieList = ({ movies, title }) => {
    console.log(title);

    return (
        <div className='p-6 '>
            <h1 className=' text-white text-2xl font-bold  py-5'>{title}</h1>
            <div className='flex overflow-x-scroll'>

                <div className='flex'>
                    {movies.map((movie) => <MovieCard key={movie.imdbID} Poster={movie.Poster} Title={movie.Title} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
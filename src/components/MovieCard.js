import React from 'react'

export const MovieCard = ({ Poster, Title }) => {

    return (
        <div className='w-[350px] h-[225px] pr-6 flex-shrink-0 relative group'>
            <img className="w-full h-full object-cover rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105"
                alt={Title} src={Poster}></img>
        </div>
    )
}

import React from 'react'

const MovieCard = ({ movie}) => { //use object destructuring instead of props because if we write props everwhere we have to write props
    return (
        <div className="movie">

        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
        
      </div>
    )
}

export default MovieCard;
import { useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'
const API_URL = "http://omdbapi.com?apikey=68d3547c"  //temporary string

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); //empty string
  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=> {
    searchmovies('Batman')
  },[])
  
  return (
    <div className='app'>
        <h1>MovieHub</h1>

    <div className="search">
      <input type="text" placeholder="Search for movies" value={searchTerm} 
      onChange={(event) => setSearchTerm(event.target.value)} />
      <img src={SearchIcon} alt="search" 
      onClick={()=>searchmovies(searchTerm)} />
    </div>
    {movies?.length > 0 
    ? (
        <div className="container">
        {movies.map((movie)=> (
          <MovieCard movie={movie} />
        ))}
      </div> 
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
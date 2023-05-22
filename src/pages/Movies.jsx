import { useState } from 'react';
import { NavLink } from 'react-router-dom';



function Movies() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const url = "https://api.themoviedb.org/3/search/movie";
  const apiKey = "0cc13ce7fd199b4570fdb1ee49a60c43";    

  const handleSearch = () => {
    console.log('Fetching movie data...');
    fetch(`${url}?api_key=${apiKey}&query=${keyword}`)
      .then(response => response.json())
      .then(data => {
        console.log('Movie data fetched successfully!');
        console.log(data);
        setSearchResults(data.results);
      })
      .catch(error => {
        console.log('Error while fetching movie data:', error);
        setSearchResults([]);
      });
  };

  console.log('Rendering Movies component...');

  return (
    <div>
      <h1>Search Movies</h1>  
      <input  type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults
          .sort((a, b) => new Date(b.release_date).getFullYear() - new Date(a.release_date).getFullYear())
          .map(movie => (
            <li key={movie.id}>
              <NavLink className="movies-list" to={`/movies/${movie.id}`}>{movie.title}:{new Date(movie.release_date).getFullYear()}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Movies;

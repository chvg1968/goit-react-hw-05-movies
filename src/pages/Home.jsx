import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '0cc13ce7fd199b4570fdb1ee49a60c43';
        const url = `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${apiKey}`;
  
        const response = await fetch(url);
        const data = await response.json();
  
        setPopularMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <NavLink className="movies-list" to={`/movies/${movie.id}`} key={movie.id}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

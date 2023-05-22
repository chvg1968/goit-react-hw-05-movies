import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import '../App.css';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/movies" className="nav-link">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

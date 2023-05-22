import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [showCast, setShowCast] = useState(false);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [showCastList, setShowCastList] = useState(false);
  const [showReviewsList, setShowReviewsList] = useState(false);


  useEffect(() => {
    const apiKey = "0cc13ce7fd199b4570fdb1ee49a60c43";
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
    const reviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

    Promise.all([fetch(movieUrl), fetch(castUrl), fetch(reviewsUrl)])
      .then(([movieResponse, castResponse, reviewsResponse]) =>
        Promise.all([
          movieResponse.json(),
          castResponse.json(),
          reviewsResponse.json(),
        ])
      )
      .then(([movieData, castData, reviewsData]) => {
        setMovie(movieData);
        setCast(castData);
        setReviews(reviewsData);
      })
      .catch((error) => console.log(error));
  }, [movieId]);

  const handleCastClick = () => {
    setShowCast(true);
    setShowCastList(true);
    setShowReviewsList(false);
  };

  const handleReviewsClick = () => {
    setShowCast(false);
    setShowCastList(false);
    setShowReviewsList(true);  
  };

  return (
    <div>
      {movie ? (
        <div className={`center movie-container ${showCastList || showReviewsList  ? 'open' : ''}`}>
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Poster"
          />
          <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>
              <b>UserScore:</b>
              <br />
              {movie.vote_average}
            </p>
            <p>
              <b>Overview:</b>
              <br />
              {movie.overview}
            </p>
            <p>
              <b>Genres:</b>
              <br />
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <div className="addInfo">
            <p className="add-title">Additional Information</p>
            <ul>
              <li>
                {/* Cast button */}
                <button onClick={handleCastClick}>Cast</button>
              </li>
              <li>
                {/* Reviews button */}
                <button onClick={handleReviewsClick}>Reviews</button> 
              </li>
            </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading movie info...</p>
      )}

      {showCast && cast && (
      <div className={`cast-list ${showCastList ? "open" : ""}`}>
        <Cast cast={cast.cast} />
      </div>
    )}

    {!showCast && reviews && (
      <div className={`reviews-list ${showReviewsList ? "open" : ""}`}> 
        <Reviews reviews={reviews.results} />
      </div>
    )}
    </div>
  );
}

export default MovieDetails;

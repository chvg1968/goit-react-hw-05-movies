import PropTypes from 'prop-types';

function Cast({ cast }) {
  return (
    <div className="cast-list">
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul className="cast-grid">
          {cast.map(actor => (
            <li className="cast" key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
              <span>{actor.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No profile yet</p>
      )}
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default Cast;



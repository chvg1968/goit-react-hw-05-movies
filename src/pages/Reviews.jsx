import PropTypes from 'prop-types';

function Reviews({reviews}) {
  return (
    <div className="reviews-list">
      <h1>Reviews</h1>
      <ul >
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>Content: {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews; 
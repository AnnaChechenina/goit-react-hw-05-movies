import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/movieKeyAPI';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);
  useEffect(() => {
    getReview(movieId).then(responseMovieReview => {
      setMovieReview(responseMovieReview.results);
    });
  }, [movieId]);

  return (
    <ul className={css.reviewsList}>
      {movieReview.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;

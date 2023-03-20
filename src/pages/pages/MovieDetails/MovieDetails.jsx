import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { getDetailsMovie } from 'services/movieKeyAPI';
import BackBtn from 'components/BackBtn';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    getDetailsMovie(movieId).then(responseMovieId => {
      setMovieDetails(responseMovieId);
    });
  }, [movieId]);

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieDetails;
  const releaseYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);
  const backLinkHref = location.state?.from ?? '/';
  return (
    <section className={css.section}>
      <BackBtn to={backLinkHref}>Go back</BackBtn>
      <div className={css.movieDetails}>
        <img
          className={css.movieDetailsPoster}
          src={poster_path}
          alt={original_title}
        />
        <div className={css.movieDetailsDescription}>
          <h2>
            {original_title} ({releaseYear})
          </h2>
          <p>User Score: {userScore} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div className={css.movieDetailsInform}>
        <h3 className={css.movieDetailsInformTitle}>Additional information</h3>
        <ul className={css.movieDetailsInformList}>
          <li>
            <NavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetails;

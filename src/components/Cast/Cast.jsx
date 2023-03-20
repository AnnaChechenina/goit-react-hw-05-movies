import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movieKeyAPI';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getCast(movieId).then(responseMovieCast => {
      setMovieCast(responseMovieCast.cast);
    });
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {movieCast.map(({ profile_path, name, character }) => {
        return (
          <li key={name}>
            <img className={css.castImg} src={profile_path} alt={name} />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;

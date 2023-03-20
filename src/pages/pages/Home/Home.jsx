import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/movieKeyAPI';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(responseMovies => {
        setMovies(responseMovies.results);
      })
      .catch(error => error.message)
      .finally(() => {});
  }, []);

  return (
    <main className={css.container}>
      <h2>Trending today</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;

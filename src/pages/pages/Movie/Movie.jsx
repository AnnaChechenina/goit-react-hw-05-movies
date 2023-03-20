import { getSearchMovie } from 'services/movieKeyAPI';
import { useState, useEffect } from 'react';
import Search from 'components/Search';
import MoviesList from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [query, setQuery] = useState(searchQuery);
  const movieName = searchParams.get('query') ?? '';
  useEffect(() => {
    if (!movieName) {
      return;
    }
    getSearchMovie(movieName)
      .then(responseMovies => {
        setMovies(responseMovies.results);
      })
      .catch(error => error.message)
      .finally(() => {});
  }, [movieName]);

  const handleFormSubmit = query => {
    setQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <Search query={query} onSubmit={handleFormSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;

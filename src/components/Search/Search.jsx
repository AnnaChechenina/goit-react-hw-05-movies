import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Search.module.css';

const Search = ({ onSubmit, query }) => {
  const [serchQuery, setSerchQuery] = useState(query);

  const handleChange = evt => {
    const { value } = evt.target;
    setSerchQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(serchQuery);

    reset();
  };

  const reset = () => {
    setSerchQuery('');
  };

  return (
    <form className={css.search} onSubmit={handleSubmit}>
      <input
        className={css.searchInput}
        type="text"
        value={serchQuery}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Search movie"
      ></input>
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;

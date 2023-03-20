import axios from 'axios';

const API_KEY = 'b6577f959d3423552aca2ac49f8147a5';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getSearchMovie = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&language=en-US&include_adult=false`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const getTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const getDetailsMovie = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&page=1&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const getCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const getReview = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

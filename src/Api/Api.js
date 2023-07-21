import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fce4697c079fffcd8ee7621b4b30c3c1',
  },
});

export const requestTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};
export const requestSearchMovies = async q => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query: q,
    },
  });
  return data;
};
export const requestMovieDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};
export const requestMovieCredits = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};
export const requestMovieReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};

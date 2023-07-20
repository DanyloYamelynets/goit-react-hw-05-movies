import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '49f71da13b49ad0dde76b18d2be1d56c',
  },
});
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

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

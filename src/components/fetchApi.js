import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '487f1c4f82b71f26e1b3085fb9548925';

export const notify = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const fetchTrending = async () => {
  const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};

export const fetchSearchMovies = async query => {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return res.data;
};

export const fetchDetailsMovie = async movieId => {
  const res = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export const fetchCast = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export const fetchReviews = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data;
};
import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '217cabb933b0898f3500da3a6d9bd013',
    language: 'es-ES',
  },
});

export default movieDb;

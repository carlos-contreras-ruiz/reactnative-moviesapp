import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {Movie, MovieDBResponse} from '../models/MovieDBNowPlayingResp';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });
  //const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    //const resp = await movieDb.get<MovieDBResponse>('/now_playing');
    //const popular = await movieDb.get<MovieDBResponse>('/popular');
    /*const movies = resp.data.results;
    setMoviesPlaying(movies);
    setPopularMovies(popular.data.results);
    setIsLoading(false);*/

    const nowPlayingPromise = movieDb.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDb.get<MovieDBResponse>('/popular');
    const topRatedPromise = movieDb.get<MovieDBResponse>('/top_rated');
    const upComingPromise = movieDb.get<MovieDBResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]).catch(e => {
      console.log(e);
      return [];
    });

    setIsLoading(false);

    if (response.length !== 0) {
      setMoviesState({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upComing: response[3].data.results,
      });
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    isLoading,
    ...moviesState,
  };
};

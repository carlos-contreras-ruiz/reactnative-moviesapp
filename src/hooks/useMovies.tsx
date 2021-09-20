import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../models/MovieDBNowPlayingResp';

export const useMovies = () => {
  const [moviesPlaying, setMoviesPlaying] = useState<Movie[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const resp = await movieDb.get<MovieDBNowPlaying>('now_playing');

    const movies = resp.data.results;
    setMoviesPlaying(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesPlaying,
    isLoading,
  };
};

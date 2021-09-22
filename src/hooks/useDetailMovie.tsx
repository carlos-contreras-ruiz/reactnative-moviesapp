/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {MovieDetail} from '../models/MovieDetail';
import {Cast, MovieCast} from '../models/MovieCast';

interface MovieDetailsState {
  isLoading: boolean;
  movieFull?: MovieDetail;
  cast: Cast[];
}
export const useDetailMovie = (movieId: number) => {
  const [state, setstate] = useState<MovieDetailsState>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const detailPromise = await movieDb.get<MovieDetail>(`/${movieId}`);
    const castPromise = await movieDb.get<MovieCast>(`${movieId}/credits`);

    const [detailResp, castResp] = await Promise.all([
      detailPromise,
      castPromise,
    ]);

    setstate({
      isLoading: false,
      movieFull: detailResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return {
    ...state,
  };
};

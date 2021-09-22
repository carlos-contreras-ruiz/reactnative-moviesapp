/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../models/MovieCast';
import {MovieDetail} from '../models/MovieDetail';
import {CastHorizontalSlider} from './CastHorizontalSlider';

interface Props {
  movieFull: MovieDetail;
  cast: Cast[];
}
export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/**Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="gray" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text> = {movieFull.genres.map(genre => genre.name).join(', ')}</Text>
        </View>

        {/**Historia */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>

        {/**Presupuesto */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.budget}</Text>
        {/**Casting */}
        <CastHorizontalSlider castList={cast} />
      </View>
    </>
  );
};

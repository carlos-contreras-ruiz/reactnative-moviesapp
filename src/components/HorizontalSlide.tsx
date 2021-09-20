/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../models/MovieDBNowPlayingResp';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}
export const HorizontalSlide = ({title, movies}: Props) => {
  return (
    <View
      style={{
        marginTop: 10,
        //backgroundColor: 'red',
        height: title ? 260 : 220,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

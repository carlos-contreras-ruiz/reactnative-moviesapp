/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movie} from '../models/MovieDBNowPlayingResp';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View
      style={{
        width,
        height,
        marginHorizontal: 5,
        //backgroundColor: 'red',
      }}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    //width: 100,
    //height: 100,
    borderRadius: 18,
  },
});

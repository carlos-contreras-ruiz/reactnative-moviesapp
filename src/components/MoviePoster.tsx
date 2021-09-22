/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Movie} from '../models/MovieDBNowPlayingResp';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
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
    </TouchableOpacity>
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

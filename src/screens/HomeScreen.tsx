/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlide} from '../components/HorizontalSlide';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');
export const HomeScreen = () => {
  const {moviesPlaying, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  if (moviesPlaying) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Algo salio mal</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 10,
        }}>
        <View
          style={{
            height: 440,
            //backgroundColor:'red',
          }}>
          <Carousel
            data={moviesPlaying!}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <HorizontalSlide title="Populares" movies={moviesPlaying!} />
        <HorizontalSlide title="En cine" movies={moviesPlaying!} />
        <HorizontalSlide movies={moviesPlaying!} />
      </View>
    </ScrollView>
  );
};

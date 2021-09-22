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
  const {nowPlaying, topRated, popular, upComing, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  if (isLoading === false && nowPlaying.length === 0) {
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
            data={nowPlaying!}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <HorizontalSlide title="Populares" movies={popular} />
        <HorizontalSlide title="Up coming" movies={upComing} />
        <HorizontalSlide title="Top rated" movies={topRated} />
      </View>
    </ScrollView>
  );
};

/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../models/RootStackParams';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDetailMovie} from '../hooks/useDetailMovie';
import {MovieDetails} from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useDetailMovie(movie.id);

  return (
    <ScrollView>
      {/**Boton para cerrar */}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {/*<View style={styles.marginContainer}>
        <Icon name="star-outline" color="grey" size={15} />
  </View>*/}

      {/*Detailmovie*/}

      {!isLoading ? (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="red" size={35} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'red',
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    elevation: 18,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 50,
    top: 20,
    left: 20,
  },
});

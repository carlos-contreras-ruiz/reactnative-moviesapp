/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Cast} from '../models/MovieCast';
import {CastItem} from './CastItem';

interface Props {
  castList: Cast[];
}
export const CastHorizontalSlider = ({castList}: Props) => {
  return (
    <View style={{marginTop: 10, marginBottom: 100}}>
      <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
        Actores
      </Text>

      <FlatList
        data={castList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CastItem actor={item} />}
        horizontal={true}
        style={{marginTop: 10, height: 60}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

import * as React from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  FlatList,
} from 'react-native';

const FilterType = {
  category: 0,
  rating: 1,
};

const FilterList = (props) => {
  return (
    <View>
      <FlatList data={props.data}>
        keyExtractor={(item) => item.id.toString()}
        renderItem={Cell}
      </FlatList>
    </View>
  );
};

const Cell = (item) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <View style={{backgroundColor: 'grey', height: 1, width: '100%'}} />
    </View>
  );
};

export {FilterList, FilterType};

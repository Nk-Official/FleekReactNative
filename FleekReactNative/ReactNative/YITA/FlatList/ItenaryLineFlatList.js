import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Easing,
  FlatList,
  Animated,
} from 'react-native';

const ItenaryLineFlatList = (props) => {
  return (
    <View style={{width: 80}}>
      <FlatList
        data={props.Data}
        keyExtractor={(item) => item.key.toString()}
        renderItem={RenderLeftView}
        scrollEnabled={false}
      />
    </View>
  );
};

const RenderLeftView = ({index}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: 80,
        backgroundColor: 'transparent',
        // height: 63,
      }}>
      <SunImage />
      <LineImageView />
    </View>
  );
};

const SunImage = () => {
  const imageStyle = {aspectRatio: 1, height: 30, marginLeft: 16};
  return (
    <View style={{backgroundColor: 'transparent'}}>
      <Image
        source={require('../../Assets/YITA/sunny.png')}
        style={imageStyle}
      />
    </View>
  );
};

const LineImageView = () => {
  let circlepath = '../../Assets/YITA/circle.png';
  let linePath = '../../Assets/YITA/line.png';
  let walkingman = '../../Assets/YITA/directions_walk_24px.png';

  let circle = {width: 12, height: 12};
  let line = {height: 50, width: 2, resizeMode: 'cover'};
  let man = {
    width: 26,
    height: 26,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 4,
    marginBottom: 4,
  };

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <Image source={require(circlepath)} style={circle} />
      <Image source={require(linePath)} style={line} />
      <Image source={require(walkingman)} style={man} />
      <Image source={require(linePath)} style={line} />
    </View>
  );
};
export default ItenaryLineFlatList;

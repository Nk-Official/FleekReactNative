import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const containerHeight = 94;
const markerHeight = 54;
const markerWidth = 200;
const markerNumberSize = 46;
const pointerCircleSize = 10;
const lineHeight = 40;


const MarketNumberCircle = (props) => {
  return (
    <View
      style={{
        width: markerNumberSize,
        height: markerNumberSize,
        borderRadius: markerNumberSize / 2,
        borderColor: '#8D74BB',
        borderWidth: 2,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: markerNumberSize - 10,
          height: markerNumberSize - 10,
          borderRadius: (markerNumberSize - 5) / 2,
          backgroundColor: '#8D74BB',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{props.title}</Text>
      </View>
    </View>
  );
};
const LineView = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center',}}>
      <View
        style={{
          width: pointerCircleSize,
          height: pointerCircleSize,
          borderRadius: pointerCircleSize / 2,
          borderColor: '#8D74BB',
          borderWidth: 3,
        }}
      />
      <View style={{height: 4, width: 2, backgroundColor: '#8D74BB', height: lineHeight,}} ></View>
    </View>
  );
};
const DetailView = (props) => {
  return (
    <View style={{marginLeft: 5}}>
      <Text style={{fontSize: 15}}>{props.title}</Text>
      <Text style={{textAlign: 'center', fontSize: 10}}>{props.subtitle}</Text>
    </View>
  );
};

const MapMarker = (props) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 300,
        alignSelf: 'center',
        botton: 40,
        width: markerWidth,
        height: containerHeight,
        // backgroundColor: 'brown',
        justifyContent: 'space-evenly'
      }}>
      <LineView></LineView>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: markerHeight,
          borderRadius: markerHeight / 2,
          borderColor: '#8D74BB',
          borderWidth: 2,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <MarketNumberCircle title={props.number} />
        <DetailView title={props.title} subtitle={props.subtitle} />
      </View>
    </View>
  );
};

export default MapMarker;

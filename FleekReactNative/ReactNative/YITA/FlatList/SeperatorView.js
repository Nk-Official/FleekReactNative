
import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';

const SeperatorView = (props) => {
  return <TimeView title='566666' />;
};
const TimeView = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 40,
        width: '100%',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => console.log(props)}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SeperatorView;
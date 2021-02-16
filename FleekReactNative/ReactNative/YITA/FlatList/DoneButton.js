import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';

const DoneButton = (props) => {
  return (
    <View
      style={{
        position: 'absolute',
        height: 30,
        left: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
      }}>
      <TouchableOpacity onPress={()=>{props.onPress}}>
        <View
          style={{
            // position: 'absolute',
            width: 80,
            // right: 50,
            justifyContent: 'center',
            backgroundColor: '#CABBE9',
            height: 30,
            marginRight: 30,
            borderRadius: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              textAlign: 'center',
            }}>
            Done
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const FloatingButton = () => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 30,
        right: 30,
      }}>
      <View
        style={{
          backgroundColor: '#CABBE9',
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Icon1 name="plus" size={26} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export {DoneButton, FloatingButton};

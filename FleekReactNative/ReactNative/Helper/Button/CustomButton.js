import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const CustomButton = (props) => (
  <TouchableOpacity
    onPress={() => {
      props.onPress();
    }}>
    <Text style={{fontSize: props.fontSize, color: props.color}}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;

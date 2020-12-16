import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

 const CustomButton = ({title, fontSize, color}) => (
  <TouchableOpacity>
    <Text style={{fontSize: fontSize, color: color}}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
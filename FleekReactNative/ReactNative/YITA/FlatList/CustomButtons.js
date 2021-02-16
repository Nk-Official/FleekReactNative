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
import EntypoIcon from 'react-native-vector-icons/Entypo';

const ButtonType = {
  upArrow: 'chevron-small-up',
  downArrow: 'chevron-down',
  plus: 2,
};

const CustomButton = (prop) => {
  return (
    <TouchableOpacity onPress={prop.onPress}>
      <View
        style={{
          backgroundColor: '#CABBE9',
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <EntypoIcon name={prop.imageName} size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export {CustomButton, ButtonType};

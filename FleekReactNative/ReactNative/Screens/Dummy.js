import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dummy = () => {
  return (
    <ImageBackground
      source={require('../Assets/Dummy/bg.png')}
      style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 40,
          marginTop: 40,
        }}>
        <Icon name="bars" size={30} color="white" />
        <Icon name="user-circle" size={30} color="white" />
      </View>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>
          Hello
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: '700',
            marginTop: 20,
          }}>
          Namrata Khanduri the iOS developer.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 44,
          margin: 40,
          borderRadius: 20,
          alignItems: 'center',
          paddingLeft: 20,
          flexDirection: 'row',
        }}>
        <Icon name="search" size={20} color="#ccce" />
        <TextInput
          placeholder="search"
          style={{marginLeft: 16, paddingRight: 16}}
        />
      </View>
    </ImageBackground>
  );
};

export default Dummy;

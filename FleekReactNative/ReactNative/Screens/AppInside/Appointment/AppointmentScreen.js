import * as React from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Theme} from '../../../Utility/Theme';

const AppointmentScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: Theme.primary}}>
      <HeaderView />
    </SafeAreaView>
  );
};

const HeaderView = () => {
  return (
    <View
      style={{
        backgroundColor: Theme.primary,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
        Appointments
      </Text>
    </View>
  );
};
export default AppointmentScreen;

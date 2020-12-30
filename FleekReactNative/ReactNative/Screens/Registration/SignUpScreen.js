/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import RegistrationHeaderImage from './CommonScreens/RegistrationHeaderImage';
import CustomButton from '../../Helper/Button/CustomButton';
import InputViews from './CommonScreens/InputViews';
import CountryCodePickerInputView from './CommonScreens/CountryCodePickerInputView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <KeyboardAwareScrollView
        style={{backgroundColor: '#fff'}}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={false}>
        <ScrollView>
          <View style={styles.container}>
            <RegistrationHeaderImage />
            <InputViews
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 2,
                  height: 1,
                },
              }}
              imagePath={require('../../Assets/Registration/userLoginInut.png')}
              placeholder={'Username'}
            />
            <InputViews
              imagePath={require('../../Assets/Registration/mail.png')}
              placeholder={'Email'}
              keyboardType="email-address"
            />
            <CountryCodePickerInputView
              imagePath={require('../../Assets/Registration/call.png')}
              placeholder={'Phone Number'}
              keyboardType="phone-pad"
              onPress={() => {
                navigation.navigate('countries');
              }}
            />
            <InputViews
              imagePath={require('../../Assets/Registration/passwordKey.png')}
              placeholder={'password'}
              passwordtype={true}
            />
          </View>
          <SignInView navigation={navigation} />
          <SignUpBtn />
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const SignInView = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 30,
        marginTop: 30,
      }}>
      <Text>Already have an account? </Text>
      <CustomButton
        title="Sign In"
        fontSize={14}
        color="blue"
        onPress={() => navigation.navigate('login')}
      />
    </View>
  );
};
const SignUpBtn = () => (
  <View style={styles.signInBtnView}>
    <TouchableOpacity>
      <Image
        style={styles.signInBtn}
        source={require('../../Assets/Registration/arrowRedCircle.png')}
      />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  signInView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  signInBtnView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
    marginHorizontal: 20,
  },
  signInBtn: {
    width: 60,
    aspectRatio: 1,
  },
});
export default SignUpScreen;

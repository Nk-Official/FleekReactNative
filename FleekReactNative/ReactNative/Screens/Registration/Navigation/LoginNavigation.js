import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignUpScreen';
import CountriesScreen from '../CountriesScreen';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

enableScreens();

const Stack = createNativeStackNavigator();
// const StackNative = createNativeStackNavigator();

const LoginNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpNavigate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const SignUpNavigate = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{stackPresentation: 'formSheet'}}>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="countries"
        component={CountriesScreen}
        options={{title: 'Countries', headerShown: true}}
      />
    </Stack.Navigator>
  );
};
export default LoginNavigation;

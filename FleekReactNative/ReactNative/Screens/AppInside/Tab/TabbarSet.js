import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../Home/HomeScreen";


function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabBarControl() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Appointments') {
            iconName = focused ? 'bell-o' : 'bell-o';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-o' : 'user-o';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart-o' : 'heart-o';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          // backgroundColor: 'black',
          borderWidth: 0.5,
          borderBottomWidth: 1,
          // backgroundColor: 'red',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderColor: 'grey',
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          height: 100,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointments" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
      <Tab.Screen name="Favorites" component={SettingsScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

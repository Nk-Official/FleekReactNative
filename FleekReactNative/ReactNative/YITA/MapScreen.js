//https://www.javatpoint.com/react-native-google-maps
// https://www.instamobile.io/react-native-tutorials/react-native-maps/
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

import {ThemeStyle} from './ThemeStyle';
import ItineraryList from '../YITA/FlatList/ItineraryList';
// import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderView />
      <SetMapView />
      <ItinarymapView />
      <FloatingButton />
    </SafeAreaView>
  );
};

const HeaderView = () => {
  return (
    <View
      style={{
        flex: 0.05,
        flexDirection: 'row',
        height: 100,
        backgroundColor: 'white',
        padding: 12,
      }}>
      <Icon name="user-circle-o" size={30} style={{marginRight: 8}} />
      <View>
        <Text style={{fontSize: 13}}>Hello, Susan</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Here is your itinerary for 3 January
        </Text>
      </View>
    </View>
  );
};

const SetMapView = () => {
  return (
    <View style={{flex: 0.4, backgroundColor: 'transparent'}}>
      {/* <MapView /> */}
    </View>
  );
};

const ItinarymapView = () => {
  return (
    <View style={{flex: 0.5, backgroundColor: 'white'}}>
      <SegmentView />
      <ItineraryList />
    </View>
  );
};

const SegmentView = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
      }}>
      <Segment
        title="Itinerary"
        selected={selectedTab == 0}
        onPress={() => {
          setSelectedTab(0);
          console.log('Itinerary');
        }}
      />
      <Segment
        title="Map"
        selected={selectedTab == 1}
        onPress={() => {
          setSelectedTab(1);
          console.log('Map');
        }}
      />
    </View>
  );
};

const Segment = (props) => {
  const textStyle = props.selected
    ? selectedSegmentStyle.text
    : unselectedSegmentStyle.text;
  const lineStyle = props.selected
    ? selectedSegmentStyle.lineView
    : unselectedSegmentStyle.lineView;

  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}>
      <Text style={textStyle}>{props.title}</Text>
      <View style={lineStyle} />
    </TouchableOpacity>
  );
};

const FloatingButton = () => {
  return (
    <TouchableOpacity style={{position: 'absolute', width: 60, height: 60, bottom: 30,
          right: 30,}}>
      <View
        style={{
          backgroundColor: '#CABBE9',
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
      >
        <Icon1 name='plus' size={26} color='white'></Icon1>
      </View>
    </TouchableOpacity>
  );
};

const selectedSegmentStyle = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lineView: {
    backgroundColor: '#000',
    height: 2,
  },
});
const unselectedSegmentStyle = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 5,
  },
  lineView: {
    backgroundColor: 'transparent',
    height: 2,
  },
});

export default MapScreen;

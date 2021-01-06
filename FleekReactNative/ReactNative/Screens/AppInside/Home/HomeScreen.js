import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {Theme} from '../../../Utility/Theme';
// import {Icon as Icon1} from 'react-native-vector-icons/Entypo';
// import Icon  from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';

import Icon2 from 'react-native-vector-icons/FontAwesome';

import HomeScreenViewModel from './HomeScreenViewModel';

const HomeScreen = () => {
  const [result, model] = HomeScreenViewModel();

  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: Theme.primary, flex: 0.13}}>
        <View style={{width: '90%', alignSelf: 'center', marginTop: '3%'}}>
          <View style={{flexDirection: 'row', marginLeft: 5, marginTop: 40}}>
            <Icon1 name="location-pin" size={20} color="#fff" />
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: '#fff',
                fontSize: 16,
                alignSelf: 'center',
                marginLeft: 5,
              }}>
              Ambala
            </Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: 'white',
              height: '50%',
              width: '100%',
              marginTop: '3%',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              placeholder="Search for salon and service"
              style={{marginLeft: 10, width: '80%', marginRight: 10}}
            />
            <Icon2
              name="search"
              size={30}
              style={{alignSelf: 'center', marginRight: 10}}
              color={Theme.primary}
            />
          </View>
        </View>
      </View>

      <View style={{marginTop: '15%'}}>
        <FilterView />
      </View>
      <ScrollView>
        <NearYou json={result} />
      </ScrollView>
    </View>
  );
};

const FilterView = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 30,
        alignItems: 'center',
      }}>
      <DropDown title="Category" />
      <DropDown title="Location" />
      <DropDown title="Rating" />
    </View>
  );
};

const DropDown = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{marginRight: 5, fontSize: 17, fontWeight: '300'}}>
        {props.title}
      </Text>
      <Icon2
        name="caret-down"
        size={20}
        color="black"
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};

const NearYou = ({json}) => {
  return (
    <View>
      <FlatList />
    </View>
  );
};

export default HomeScreen;

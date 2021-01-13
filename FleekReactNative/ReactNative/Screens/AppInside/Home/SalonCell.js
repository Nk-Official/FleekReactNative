import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import {Theme} from '../../../Utility/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const SalonCell = ({item}) => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../../Assets/Home/salonPlaceholder.png')}
        style={{
          height: 150,
          resizeMode: 'cover',
          width: '100%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      />
      <View
        style={{
          padding: 10,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          backgroundColor: 'white'
        }}>
        <Text>{item.tag_line}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
        <LocationView location={item.location} />
        <RatingView rating={item.rating} count={item.userCount} />
      </View>
    </View>
  );
};

const LocationView = (props) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
      <EntypoIcon name="location-pin" color="#808284" size={25} />
      <Text style={{color: '#808284', marginLeft: 5}}>{props.location}</Text>
    </View>
  );
};

const RatingView = (props) => {
  return (
    <View style={style.ratingViewContainer}>
      <View style={style.ratingView}>
        <Icon name="star" color="#fff" size={15} />
        <Text style={{color: '#fff', marginLeft: 5}}>{props.rating}</Text>
      </View>
      <Text>({props.count})</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: 'transparent',
    // height: 200,
    margin: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    // overflow: 'hidden'
  },
  ratingViewContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  ratingView: {
    backgroundColor: Theme.primary,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 4,
    marginRight: 8,
    alignItems: 'center',
  },
});

export default SalonCell;

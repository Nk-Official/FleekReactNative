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
import {ThemeStyle} from '../ThemeStyle';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';

const CellItemContext = React.createContext('');

const ItineraryList = () => {
  const [Data, setData] = useState([
    {
      key: 1,
      time: '2:00 pm',
      name: '1. National Design Centre',
      address: '111 Middle Rd, Singapore 188969',
      timing: '9:00am - 9:00pm',
      type: ['Art & museums', 'Culture', 'Family'],
      imagePath: '../../Assets/YITA/cake.png',
      info:
        'The National Design Centre (NDC) is the nexus for all things design. This is where designers and businesses congregate to exchange ideas, conduct business...',
    },
    {
      key: 2,
      time: '2:00 pm',
      name: '2. National Design Centre',
      address: '111 Middle Rd, Singapore 188969',
      timing: '9:00am - 9:00pm',
      type: ['Art & museums', 'Culture', 'Family'],
      imagePath: '../../Assets/YITA/cake.png',
      info:
        'The National Design Centre (NDC) is the nexus for all things design. This is where designers and businesses congregate to exchange ideas, conduct business...',
    },
    {
      key: 3,
      time: '2:00 pm',
      name: '3. National Design Centre',
      address: '111 Middle Rd, Singapore 188969',
      timing: '9:00am - 9:00pm',
      type: ['Art & museums', 'Culture', 'Family'],
      imagePath: '../../Assets/YITA/cake.png',
      info:
        'The National Design Centre (NDC) is the nexus for all things design. This is where designers and businesses congregate to exchange ideas, conduct business...',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <DraggableFlatList
        data={Data}
        keyExtractor={(item) => item.key.toString()}
        renderItem={Cell}
        onMoveEnd={({data}) => {
          console.log(data);
          setData(data);
        }}
      />
    </View>
  );
};

const Cell = ({item, index, move, moveEnd, isActive}) => {
  return (
    <CellItemContext.Provider value={{item}.item}>
      <TouchableOpacity
        onLongPress={move}
        onPressOut={moveEnd}
        onPress={() => console.log({item}.item)}>
        <View style={{backgroundColor: 'transparent', flexDirection: 'row'}}>
          <SunImage />
          <LineImageView />
          <TextDetailView />
        </View>
      </TouchableOpacity>
    </CellItemContext.Provider>
  );
};

const SunImage = () => {
  const imageStyle = {aspectRatio: 1, height: 30, marginLeft: 16};
  return (
    <View>
      <Image
        source={require('../../Assets/YITA/sunny.png')}
        style={imageStyle}
      />
    </View>
  );
};
const TextDetailView = () => {
  const headingStyle = {fontSize: 18, color: '#4B4B4B', marginBottom: 5};
  const imageStyle = {width: 60, height: 60, marginRight: 16};
  const subHeadingStyle = {color: '#757575'};
  const [showDetail, setShowDetail] = useState(false);
  return (
    <CellItemContext.Consumer>
      {(value) => {
        const imagePath = value.imagePath.toString();
        return (
          <View style={{marginRight: 16}}>
            <Text style={{marginBottom: 16}}>2:00 pm</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../Assets/YITA/cake.png')} style={imageStyle} />
              {/* <Image source={require(imagePath)} style={imageStyle} /> */}
              <View>
                <Text style={headingStyle}>{value.name}</Text>
                <Text style={subHeadingStyle}>{value.address}</Text>
                <DetailView hidden={!showDetail} />
                <SeeDetailButton
                  onPress={() => {
                    console.log(imagePath);
                    setShowDetail(!showDetail);
                  }}
                />
              </View>
            </View>
          </View>
        );
      }}
    </CellItemContext.Consumer>
  );
};
const SeeDetailButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}>
      <Text
        style={{
          fontSize: 12,
          color: '#757575',
          marginTop: 5,
          textDecorationLine: 'underline',
        }}>
        See details
      </Text>
    </TouchableOpacity>
  );
};
const LineImageView = () => {
  let circlepath = '../../Assets/YITA/circle.png';
  let linePath = '../../Assets/YITA/line.png';
  let walkingman = '../../Assets/YITA/directions_walk_24px.png';

  let circle = {width: 12, height: 12};
  let line = {height: 40, width: 2, resizeMode: 'cover'};
  let man = {
    width: 26,
    height: 26,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 4,
    marginBottom: 4,
  };

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <Image source={require(circlepath)} style={circle} />
      <Image source={require(linePath)} style={line} />
      <Image source={require(walkingman)} style={man} />
      <Image source={require(linePath)} style={line} />
    </View>
  );
};

const DetailView = (props) => {
  if (props.hidden) {
    return null;
  }
  return (
    <View style={{height: 200, backgroundColor: 'transparent'}}>
      <Text style={{fontSize: 12, color: '#757575'}}>
        Open now: 9:00am - 9:00pm
      </Text>
    </View>
  );
};

export default ItineraryList;

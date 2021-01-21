import React, {useState, useReducer} from 'react';
import {
  Text,
  View,
  ScrollView,
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
const CellHeightContext = React.createContext([]);

const seperators = ['4:00', '6:00', 'third seperator'];
const heightOfItenaryCell = [];

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
      time: '4:00 pm',
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
      time: '6:00 pm',
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
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 100}}>
          <FlatList
            data={Data}
            keyExtractor={(item) => item.key.toString()}
            renderItem={RenderLeftView}
            scrollEnabled={false}
          />
        </View>
        <View>
          <DraggableFlatList
            data={Data}
            keyExtractor={(item) => item.key.toString()}
            renderItem={Cell}
            ItemSeparatorComponent={SeperatorView}
            ListHeaderComponent={HeaderView}
            onMoveEnd={({data}) => {
              for (let i = 1; i <= data.length; i++) {
                data[i - 1].key = i;
              }
              setData(data);
            }}
            scrollEnabled={false}
            style={{width: 700, backgroundColor: 'transparent'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const Cell = ({item, index, move, moveEnd, isActive}) => {
  const [heights, setHeights] = useReducer(heightOfItenaryCell);
  return (
    <CellItemContext.Provider value={{item}.item}>
      <CellHeightContext.Provider value={heightOfItenaryCell}>
        <TouchableOpacity
          onLongPress={move}
          onPressOut={moveEnd}
          onPress={() => console.log({item}.item)}
          onLayout={(event) => {
            const {x, y, width, height} = event.nativeEvent.layout;
            heightOfItenaryCell[index] = height;
            // setHeights(heightOfItenaryCell);
            // console.log('height of flatlist item', heightOfItenaryCell);
          }}>
          <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
            <TextDetailView />
          </View>
        </TouchableOpacity>
      </CellHeightContext.Provider>
    </CellItemContext.Provider>
  );
};

const SunImage = () => {
  const imageStyle = {aspectRatio: 1, height: 30, marginLeft: 16};
  return (
    <View style={{backgroundColor: 'transparent'}}>
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
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Assets/YITA/cake.png')}
                style={imageStyle}
              />
              <View>
                <Text style={headingStyle}>{value.name}</Text>
                <Text style={subHeadingStyle}>{value.address}</Text>
                <DetailView hidden={!showDetail} />
                <SeeDetailButton
                  onPress={() => {
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

const RenderLeftView = ({index}) => {
  return (
    <CellHeightContext.Consumer>
      {(value) => {
        {/* const imagePath = value.imagePath.toString(); */}
        return (
          <View
            style={{
              flexDirection: 'row',
              width: 80,
              backgroundColor: 'transparent',
              height: value[index],
            }}>
            <SunImage />
            <LineImageView />
          </View>
        );
      }}
    </CellHeightContext.Consumer>
  );
};

const SeperatorView = (props) => {
  const value = seperators[props.leadingItem.key - 1];
  return <TimeView title={value} />;
};
const HeaderView = (props) => {
  // const value = seperators[props.leadingItem.key - 1];
  return <TimeView title="2:00" />;
};

const TimeView = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        height: 40,
        width: '100%',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => console.log(props)}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ItineraryList;

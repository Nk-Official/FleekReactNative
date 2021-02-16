import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Easing,
  FlatList,
  NativeModules,
  LayoutAnimation,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeStyle} from '../ThemeStyle';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';
import {CustomButton, ButtonType} from './CustomButtons';

const CellItemContext = React.createContext('');
const seperators = ['4:00', '6:00', 'third seperator'];
const heightOfItenaryCell = [];

const ItineraryList = () => {
  const walkingManFlatList = useRef();

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
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 100}}>
            <FlatList
              data={Data}
              keyExtractor={(item) => item.key.toString()}
              renderItem={RenderLeftView}
              scrollEnabled={false}
              ref={walkingManFlatList}
            />
          </View>
          <View>
            <ItinerarySwitcbalList Data={Data} setData={setData} />
          </View>
        </View>
      </ScrollView>
      <DownScrollButton />
      <UpScrollButton />
    </View>
  );
};
const ItinerarySwitcbalList = (props) => {
  const [cellIndexToAnimate, setCellIndexToAnimate] = useState({
    up: -1,
    down: -1,
  });

  const Cell = ({item, index, move, moveEnd, isActive}) => {
    return <CellContainer item={item} index={index} />;
  };

  const CellContainer = ({item, index}) => {
    const {UIManager} = NativeModules;
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    let intitalSize = {
      width: 0,
      height: 0,
    };
    function setIntitalSize(value) {
      if (intitalSize.width === 0) {
        intitalSize = value;
      }
    }

    let [cellSize, setCellWidth] = useState(0);

    const [cellStyle, setCellStyle] = useState({
      backgroundColor: 'white',
      flexDirection: 'row',
    });

    const [showShadow, setShowShadow] = useState(false);
    function setShadowVisibility(visible: Bool) {
      setShowShadow(visible);
      let style = {
        backgroundColor: 'white',
        flexDirection: 'row',
        transform: [
          {
            translateY: upperAnimation,
          },
        ],
      };
      if (visible) {
        style = {
          backgroundColor: 'white',
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.9,
          shadowRadius: 5,
          transform: [
            {
              translateY: upperAnimation,
            },
          ],
        };
      }

      setCellStyle(style);
    }

    let activated = false; //useRef(new Animated.Value(false)).current;
    const upperAnimation = useRef(new Animated.Value(0)).current;
    const startAnimation = () => {
      activated = !activated;

      Animated.timing(upperAnimation, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.back(),
      }).start();
    };

    let selectedCellIndex = -1;
    function animateDown() {
      console.log('animate me down')
    }
    function animateUp() {
      console.log('animate me up')
    }
    return (
      <CellItemContext.Provider value={{item}.item}>
        <TouchableOpacity
          onLongPress={() => {
            LayoutAnimation.spring();
            console.log('onLongPress');
            setCellWidth({
              width: intitalSize.width + 15,
              height: intitalSize.height + 15,
            });
            setShadowVisibility(true);
            selectedCellIndex = index;
            setCellIndexToAnimate({up: index - 1, down: index + 1});
            //   setCellStyle({
            //     backgroundColor: 'white',
            //     flexDirection: 'row',
            //     width: intitalSize.width + 5,
            //     height: intitalSize.height + 5,
            //   });
          }}
          onPressOut={() => {
            //   setShadowVisibility(false);
          }}
          onPress={() => {
            startAnimation();
            // if (showShadow) {
            //   startAnimation();
            //   return;
            // }
            // setShadowVisibility(false);
          }}
          onLayout={(event) => {
            const {x, y, width, height} = event.nativeEvent.layout;
            heightOfItenaryCell[index] = height;
            setIntitalSize({width: width, height: height});
            console.log('height of flatlist item', heightOfItenaryCell);
            if (cellIndexToAnimate.up === index) {
              animateDown();
            } else if (cellIndexToAnimate.down === index) {
              animateUp();
            }
          }}>
          <Animated.View style={cellStyle}>
            <TextDetailView />
          </Animated.View>
        </TouchableOpacity>
      </CellItemContext.Provider>
    );
  };

  return (
    <FlatList
      data={props.Data}
      keyExtractor={(item) => item.key.toString()}
      renderItem={Cell}
      ItemSeparatorComponent={SeperatorView}
      ListHeaderComponent={HeaderView}
      onMoveEnd={({data}) => {
        for (let i = 1; i <= data.length; i++) {
          data[i - 1].key = i;
        }
        props.setData(data);
      }}
      scrollEnabled={false}
      style={{width: 700, backgroundColor: 'transparent'}}
    />
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
          <View style={{marginRight: 0, padding: 10}}>
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
    <View
      style={{
        flexDirection: 'row',
        width: 80,
        backgroundColor: 'transparent',
        // height: 63,
      }}>
      <SunImage />
      <LineImageView />
    </View>
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

const DownScrollButton = () => {
  return (
    <View style={{position: 'absolute', right: 20, bottom: 30}}>
      <CustomButton imageName={ButtonType.downArrow} />
    </View>
  );
};

const UpScrollButton = () => {
  return (
    <View style={{position: 'absolute', right: 20, top: 70}}>
      <CustomButton imageName={ButtonType.upArrow} />
    </View>
  );
};
export default ItineraryList;

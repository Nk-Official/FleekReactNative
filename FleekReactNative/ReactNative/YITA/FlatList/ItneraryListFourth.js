import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Easing,
  FlatList,
  Animated,
  Text,
  NativeModules
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeStyle} from '../ThemeStyle';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';
import {CustomButton, ButtonType} from './CustomButtons';
import CellItemContext from './CellItemContext';
import ItenaryCell from './ItenaryCell';
import LineFlatList from './ItenaryLineFlatList';
import {DoneButton, FloatingButton} from './DoneButton';
import SeperatorView from './SeperatorView';
import { DataSourceArray } from "../../Utility/DataSourceArray";

// const CellItemContext = React.createContext('');
const seperators = ['4:00', '6:00', 'third seperator'];
const heightOfItenaryCell = [];
let fullViewHeight = 0;
let upAnimation = new Animated.Value(0);
let downAnimation = new Animated.Value(0);

const ItneraryListFourth = () => {
  
  const [Data, setData] = useState(DataSourceArray);

  const [selectedCell, setSelectedCell] = useState({
    index: -1,
  });
  const [refresh, reload] = useState(true);
  const [cellIndexToAnimate, setCellIndexToAnimate] = useState({
    up: -1,
    down: -1,
  });
  function mergeDataWithSeperator(){
    var keys = [6,7,8,9,10,11,12,13,14,15,16]
    var result = DataSourceArray.reduce((res, item, index) => res.concat(item, {key:keys[index], type:'seperator'}), []).slice(0, -1);
    console.log('bcmxbvmnxbcv')
    console.log(result);
    setData(result)
  }
  function cellStyle(index: Int) {
    const selected = index === selectedCell.index;
    let style = {
      marginTop: 20,
      marginBottom: 20,
      marginBottomRight: 20,
      backgroundColor: 'white',
      padding: 10,
    };

    if (selected) {
      let shadowStyle = {};
      if (index === cellIndexToAnimate.up) {
        shadowStyle = {
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.9,
          shadowRadius: 5,
          transform: [
            {
              translateY: upAnimation,
            },
          ],
        };
      } else if (index === cellIndexToAnimate.down) {
        shadowStyle = {
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.9,
          shadowRadius: 5,
          transform: [
            {
              translateY: downAnimation,
            },
          ],
        };
      } else {
        shadowStyle = {
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.9,
          shadowRadius: 5,
        };
      }
      return [style, shadowStyle];
    } else {
      let shadowStyle = {};
      if (index === cellIndexToAnimate.up) {
        shadowStyle = {
          transform: [
            {
              translateY: upAnimation,
            },
          ],
        };
      } else if (index === cellIndexToAnimate.down) {
        shadowStyle = {
          transform: [
            {
              translateY: downAnimation,
            },
          ],
        };
      }
      return [style, shadowStyle];
    }
  }

  function selectCellForSwipe(index, yPosition, cellHeight) {
    console.log('selectCellForSwipe', yPosition, fullViewHeight)
    setSelectedCell({index: index, y: yPosition, height: cellHeight});
    setCellIndexToAnimate({up: -1, down: -1});
  }
  useEffect(()=>{
    mergeDataWithSeperator()
  }, [])
  const Cell = ({item, index}) => {
    const componetRef = useRef(null);
    useEffect(()=>{
      console.log('useEffect inside cell')
      if (componetRef !== undefined){

      
      // componetRef.measure( (fx, fy, width, height, px, py) => {
      //       console.log('Component width is: ' + width)
      //       console.log('Component height is: ' + height)
      //       console.log('X offset to frame: ' + fx)
      //       console.log('Y offset to frame: ' + fy)
      //       console.log('X offset to page: ' + px)
      //       console.log('Y offset to page: ' + py)
      //   })        
      }

    },)
    if (Data[index].type === 'seperator'){
      return <SeperatorView></SeperatorView>
    }

    const style = cellStyle(index);
    let yOffset = 0;
    let cellHeight = 0;

    return (
      <CellItemContext.Provider value={{item}.item}>
        <TouchableOpacity
          onLongPress={() => {
            selectCellForSwipe(index, yOffset, cellHeight);
          }}
          onPress={() => {
            //unselect the selected cell
          }}
          ref={componetRef}
          onLayout={(event) => {
            // console.log('layout of cell')
            let {x, y, width, height} = event.nativeEvent.layout;
            yOffset = y;
            cellHeight = height;
            if (index === cellIndexToAnimate.up) {
              animateUp(index);
            } else if (index === cellIndexToAnimate.down) {
              animateDown(index);
            }
            const UIManager = require('NativeModules').UIManager;
                        console.log('cdsjhjdcs', UIManager)

            const handle = React.findNodeHandle(componetRef);
            // if (index === selectedCell.index) {
            //   animateUp(index);
            // }
          }}>
          <Animated.View style={style}>
            <ItenaryCell />
          </Animated.View>
        </TouchableOpacity>
      </CellItemContext.Provider>
    );
  };

  const DragUpDownButttn = () => {
    if (selectedCell.index === 0) {
      console.log('show only down button')
      return <DownScrollButton />;
    } else if (selectedCell.index === Data.length - 1) {
      console.log('show only up button')
      return <UpScrollButton />;
    } else if (selectedCell.index < 0) {
      return null;
    }
    return (
      <View
        // pointerEvents="none"
        style={{
          position: 'absolute',
          flex: 1,
          top: 0,
          bottom: 0,
          // width: 10,
          right: 0,
          left: 0,
          // backgroundColor: 'red'
        }}>
        <DownScrollButton />
        <UpScrollButton />
      </View>
    );
  };
  function calculateYDownArrow() {
    const downArrowBtnHeight = 44;
    let yOffset = selectedCell.y;
    let height = selectedCell.height;
    console.log('calculateYDownArrow', yOffset, fullViewHeight);

    if (downArrowBtnHeight + yOffset + height + 5 > fullViewHeight) {
      return 30;
    } else {
      return fullViewHeight - (downArrowBtnHeight + yOffset + height + 5);
    }
  }
  function calculateYUpArrow() {
    const upArrowBtnHeight = 44;
    let yOffset = selectedCell.y;
    console.log('calculateYUpArrow', yOffset, fullViewHeight);

    if (yOffset - upArrowBtnHeight - 5 < 0) {
      return 30;
    } else {
      return yOffset - upArrowBtnHeight - 5;
    }
  }

  function animateDown(index) {
    let downToY = (selectedCell.height + 40);
    Animated.timing(downAnimation, {
      toValue: downToY,
      duration: 900,
      useNativeDriver: true,
      // easing: Easing.back(),
    }).start(() => {
      selectCellForSwipe(-1, 0, 0);
      downAnimation = new Animated.Value(0);
    });
  }
  function animateUp(index) {
    let upperAnimation = -(selectedCell.height + 40);
    Animated.timing(upAnimation, {
      toValue: upperAnimation,
      duration: 900,
      useNativeDriver: true,
      // easing: Easing.back(),
    }).start(() => {
      selectCellForSwipe(-1, 0, 0);
      upAnimation = new Animated.Value(0);
      selectCellForSwipe(-1, 0, 0);
      setData((array) => {
        let data = [...array];
        let temp = data[index];
        data[index] = data[index - 2];
        data[index - 2] = temp;
        return data;
      });
    });
  }
  const DownScrollButton = (props) => {
    const bottom = calculateYDownArrow();
    return (
      <View style={{position: 'absolute', right: 20, bottom: bottom}}>
        <CustomButton
          imageName={ButtonType.downArrow}
          onPress={() => {
            setCellIndexToAnimate({
              up: selectedCell.index + 2,
              down: selectedCell.index,
            });
          }}
        />
      </View>
    );
  };

  const UpScrollButton = () => {
    const top = calculateYUpArrow();
    return (
      <View style={{position: 'absolute', right: 20, top: top}}>
        <CustomButton
          imageName={ButtonType.upArrow}
          onPress={() => {
            setCellIndexToAnimate({
              up: selectedCell.index,
              down: selectedCell.index - 2,
            });
          }}
        />
      </View>
    );
  };

  const AddButton = () => {
    if (selectedCell.index !== -1) {
      return null;
    }
    return <FloatingButton />;
  };
  const BottomDoneButton = () => {
    if (selectedCell.index === -1) {
      return null;
    }
    return <DoneButton onPress={()=>{
        selectCellForSwipe(-1, 0, 0);
    }}></DoneButton>
  };

  return (
    <View
      onLayout={(event) => {
        let {x, y, width, height} = event.nativeEvent.layout;
        fullViewHeight = height;
        console.log('full view height set', height, fullViewHeight)
      }}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <LineFlatList Data={DataSourceArray} />
          <FlatList
            extraData={refresh}
            // ItemSeparatorComponent={AView}
            data={Data}//{[...Data, ...seperators]}
            // ListHeaderComponent={AView}
            keyExtractor={(item) => item.key.toString()}
            CellRendererComponent={Cell}
            // scrollEnabled={selectedCell.index < 0}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
      <DragUpDownButttn />
      <BottomDoneButton></BottomDoneButton>
      
      <AddButton />
    </View>
  );
};
export default ItneraryListFourth;

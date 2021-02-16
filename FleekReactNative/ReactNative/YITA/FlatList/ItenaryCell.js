import React, {useState, useRef} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import CellItemContext from './CellItemContext';
// const CellItemContext = React.createContext('');

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
const TextDetailView = (props) => {
  const headingStyle = {fontSize: 18, color: '#4B4B4B', marginBottom: 5};
  const imageStyle = {width: 60, height: 60, marginRight: 16};
  const subHeadingStyle = {color: '#757575'};
  const [showDetail, setShowDetail] = useState(false);
  return (
    <CellItemContext.Consumer>
      {(value) => {
        const imagePath = value.imagePath.toString();
        return (
          <View /*style={props.style}*/>
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

export default TextDetailView;

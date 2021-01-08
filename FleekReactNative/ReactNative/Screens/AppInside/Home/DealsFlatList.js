import * as React from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import {CalculatorDiscountPercentage} from '../../../Utility/Calculator';

const DealsFlatList = ({item}) => {
  let discount = CalculatorDiscountPercentage(item.price, item.offer_price);
  discount = discount + '% Off';

  return (
    <View style={styles.cellContainerView}>
      <ImageBackground
        style={styles.cellPlaceholderImage}
        source={require('../../../Assets/Home/salonPlaceholder.png')}>
        <ImageBackground
          style={styles.cellPlaceholderImage}
          source={require('../../../Assets/Home/gradient.png')}>
          <View style={{margin: 10, justifyContent: 'space-between', flex: 1}}>
            <SalonName name={item.salon.name} />
            <View style={{justifyContent: 'space-between'}}>
              <DiscountTitleView discount={discount} title={item.title} />
              <BookNowButton />
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

const SalonName = (props) => {
  return (
    <Text
      style={{
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
      }}>
      {props.name}
    </Text>
  );
};

const DiscountTitleView = (props) => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontWeight: 'bold',
        }}>
        {props.discount}
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

const BookNowButton = () => {
  return (
    <View style={{backgroundColor: 'white', width: 200, marginTop: 16}}>
      <Button title="BOOK NOW" color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainerView: {
    height: 200,
    width: Dimensions.get('window').width - 40,
    backgroundColor: 'transparent',
    margin: 20,
    // padding: 20,
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  cellPlaceholderImage: {
    width: '100%',
    flex: 1,
  },
});

export default DealsFlatList;

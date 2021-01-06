import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Theme} from '../../Utility/Theme';
import AntIcon from 'react-native-vector-icons/AntDesign';

const countries = [
  {
    name: 'Canada',
    code: '+1',
    key: '1',
  },
  {
    name: 'United States',
    code: '+1',
    key: '2',
  },
  {
    name: 'India',
    code: '+91',
    key: '3',
  },
];

const CountriesScreen = ({navigation}) => {
  const [selectedCountry, setCountry] = useState('');

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Country List</Text>
        <Button
          title="Done"
          color="white"
          style={styles.headerDoneBtn}
          onPress={() => navigation.pop()}
        />
      </View>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => (
          <Cell
            item={item}
            onPress={() => {
              setCountry(item.name);
            }}
            countrySelected={selectedCountry}
          />
        )}
      />
    </View>
  );
};

const Cell = ({item, onPress, countrySelected}) => {
  const CheckIcon = ({hide}) => {
    if (hide) {
      return null;
    }
    return <AntIcon name="check" color="blue" size={20} />;
  };
  return (
    <TouchableOpacity
      onPress={() => {
        // this.setCountry(item.name);
        if (onPress !== undefined) {
          onPress();
        }
      }}>
      <View style={styles.cellContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={styles.cellTitle}>{item.name}</Text>
          <Text style={{paddingRight: 10}}>{item.code}</Text>
          <CheckIcon hide={countrySelected !== item.name} />
        </View>

        <View style={styles.cellLine} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Theme.header,
  },
  headerTitle: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
  },
  headerDoneBtn: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // right: 0,
    alignSelf: 'flex-end',

    // position: 'absolute',
    flex: 0.5,
    marginRight: 20,
  },
  cellContainer: {
    // height: 40,
    margin: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // backgroundColor: 'white',
    justifyContent: 'center',
  },
  cellTitle: {padding: 10, flex: 1},
  cellLine: {
    height: 1,
    backgroundColor: '#C8C8CA',
    marginLeft: 10,
    marginRight: 10,
  },
});
export default CountriesScreen;

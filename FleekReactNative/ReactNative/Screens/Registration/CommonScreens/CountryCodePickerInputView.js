import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// const DropDownIcon = <Icon name="sort-down" size={30} color="#000" />;

const CountryCodePickerInputView = ({
  imagePath,
  placeholder,
  keyboardType,
  onPress,
}) => {
  const inputType = keyboardType == 'undefined' ? 'default' : keyboardType;
  return (
    <View style={styles.TextContainerView}>
      <Image style={styles.textViewIcons} source={imagePath} />
      <Text>+1</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('on press',onPress)
          if (onPress !== undefined) {
            onPress();
          }
        }}>
        <View>
          <Icon
            active
            name="sort-down"
            size={40}
            color="#000"
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignself: 'self',
              width: 55,
              height: 55,
              // backgroundColor: 'red'
            }}
          />
        </View>
      </TouchableOpacity>
      <TextInput
        keyboardType={inputType}
        style={styles.textInput}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextContainerView: {
    height: 44,
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 22,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  textViewIcons: {
    width: 30,
    aspectRatio: 1,
  },
  textInput: {
    height: 40,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default CountryCodePickerInputView;

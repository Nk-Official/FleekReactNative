import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Image, Dimensions} from 'react-native';

const InputViews = ({imagePath, placeholder, keyboardType, passwordtype}) => {
  const inputType = keyboardType == 'undefined' ? 'default' : keyboardType;
  const isPasswordType = passwordtype ? true : false;
  return (
    <View style={styles.TextContainerView}>
      <Image style={styles.textViewIcons} source={imagePath} />
      <TextInput
        keyboardType={inputType}
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={isPasswordType}
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

export default InputViews;

import React, {useState} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
const RegistrationHeaderImage = () => {
  return (
    <Image
      style={styles.headerImage}
      source={require('../../../Assets/Registration/Mask_Group.png')}
    />
  );
};

const styles = StyleSheet.create({
  headerImage: {
    resizeMode: 'contain',
    height: Dimensions.get('window').height / 2.7,
    width: '100%',
    // flex: 1,
  },
});

export default RegistrationHeaderImage;

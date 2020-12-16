import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../Helper/Button/CustomButton';

const LoginScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderImage />
        <EmailPasswordContainer />
        <OtherOtionsView />
        <LoginBtn />
        <LogInWithView />
        <SocialLoginBtn />
      </View>
    </ScrollView>
  );
};

const HeaderImage = () => {
  return (
    <Image
      style={styles.headerImage}
      source={require('../../Assets/Registration/Mask_Group.png')}
    />
  );
};

const EmailPasswordContainer = () => {
  return (
    <View style={styles.emailPasswordContainer}>
      <TextView
        imagePath={require('../../Assets/Registration/userLoginInut.png')}
        placeholder={'Email'}
      />
      <TextView
        imagePath={require('../../Assets/Registration/passwordKey.png')}
        placeholder={'Password'}
      />
    </View>
  );
};

const TextView = ({imagePath, placeholder}) => {
  return (
    <View style={styles.TextContainerView}>
      <Image style={styles.textViewIcons} source={imagePath} />
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const OtherOtionsView = () => (
  <View style={styles.otherOptContainerView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text>Don't have a account? </Text>
      <CustomButton title="Sign up" fontSize={14} color="#259CFB" />
    </View>
    <View>
      <CustomButton title="Forgot Password" fontSize={12} color="#259CFB" />
    </View>
  </View>
);

const LoginBtn = () => (
  <View style={styles.signInBtnView}>
    <TouchableOpacity>
      <Image
        style={styles.signInBtn}
        source={require('../../Assets/Registration/arrowRedCircle.png')}
      />
    </TouchableOpacity>
  </View>
);

const LogInWithView = () => (
  <View style={styles.logInWithView}>
    <View style={styles.lineView} />
    <Text style={{fontSize: 16, color: '#676767'}}>Login With</Text>
    <View style={styles.lineView} />
  </View>
);

const SocialLoginBtn = () => (
  <View style={styles.logInWithView}>
    <TouchableOpacity>
      <Image
        style={styles.fbBtn}
        source={require('../../Assets/Registration/fbLogin.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        style={styles.fbBtn}
        source={require('../../Assets/Registration/instaLogin.png')}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {},

  headerImageView: {},
  headerImage: {
    resizeMode: 'contain',
    height: Dimensions.get('window').height / 2.7,
    width: '100%',
    // flex: 1,
  },
  emailPasswordContainer: {
    marginTop: 20,
  },
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
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    marginLeft: 16,
    marginRight: 16,
  },
  textViewIcons: {
    width: 30,
    aspectRatio: 1,
  },
  otherOptContainerView: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signInBtnView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
    marginHorizontal: 20,
  },
  signInBtn: {
    width: 60,
    aspectRatio: 1,
  },
  logInWithView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  lineView: {
    height: 1,
    width: 50,
    backgroundColor: 'rgba(103, 103, 103, 0.4)',
    marginHorizontal: 10,
  },
  socialLoginView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbBtn: {
    width: 60,
    aspectRatio: 1,
    margin: 10,
  },
});
export default LoginScreen;

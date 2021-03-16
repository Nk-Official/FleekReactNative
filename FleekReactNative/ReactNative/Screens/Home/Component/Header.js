import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const HeaderHome = props => {
    return <View style={{...styles.container,...props.style}}>
        <Text></Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: '#FF0000'
    }
})
export default HeaderHome;
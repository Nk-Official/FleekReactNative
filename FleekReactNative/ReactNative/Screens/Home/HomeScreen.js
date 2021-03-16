import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import Header from "./Component/Header";
import Card from "./Component/Card";
const HomeScreen = () => {
    return (
        <View style={styles.container}>
        <Header></Header>
        <View style={{backgroundColor: 'white', flex:1}}>
            <Card></Card>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default HomeScreen;
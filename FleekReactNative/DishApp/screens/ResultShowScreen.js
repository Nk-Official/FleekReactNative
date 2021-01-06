import React, {useState, useEffect} from 'react';
import {Image, View, StyleSheet, FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({route, navigation}) => {
  const [result, setResults] = useState([]);

  useEffect(() => {
    fetchDetails(route.params.id);
  }, []);

  const fetchDetails = async (businessId) => {
    try {
      const response = await yelp.get(`${businessId}`);
      //console.log(response.data)
      setResults(response.data);
    } catch (e) {
      console.log('Something went wrong');
    }
  };

  return (
    <FlatList
      keyExtractor={(photo) => photo}
      data={result.photos}
      renderItem={({item}) => {
        return <Image style={styles.image} source={{uri: item}} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
});

export default ResultShowScreen;

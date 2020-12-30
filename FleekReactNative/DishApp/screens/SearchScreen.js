import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, onTermChange] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterList = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={onTermChange}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage} </Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterList('$')} />
        <ResultsList title="Bit Pricier" results={filterList('$$')} />
        <ResultsList title="Big Spender!" results={filterList('$$$')} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});

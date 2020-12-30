import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async (searchText) => {
    try {
      const response = await yelp.get('search', {
        params: {
          limit: 50,
          term: searchText,
          location: 'boston',
        },
      });
      //   console.log('data response', response.data);
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};

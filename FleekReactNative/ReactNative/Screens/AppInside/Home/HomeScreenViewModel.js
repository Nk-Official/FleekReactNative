import {useState, useEffect} from 'react';
import {APIEndPoints, BaseUrl} from '../../../NetworkConnect/APIEndPoints';
import {ApiHit} from '../../../NetworkConnect/APIHit';

export default () => {
  const [results, setResults] = useState();
  const salonsApi = async () => {
    const params = {lat: 49.2501, lng: -123.0824, per_page: 10, page: 1};
    // const [endpoint, baseurl] = APIEndPoints()
    console.log('home screen view model', APIEndPoints.deals, BaseUrl)
    await ApiHit.get(APIEndPoints.deals, {
      params: params,
      // headers: {
      //   'device-token': 'ccnsnamncnnsnmcsmcncmnnccmdnsmn',
      // },
    })
      .then(function (response) {
        // console.log('response');
        // console.log(response);
        setResults(response);
      })
      .catch(function (error) {
        console.log('result');
        console.log(error);
        console.log(error.message);
      });
  };
  useEffect(() => {
    salonsApi();
  }, []);

  return [results, salonsApi];
};

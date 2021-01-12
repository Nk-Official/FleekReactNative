import React, {useState, useEffect} from 'react';
import {APIEndPoints, BaseUrl} from '../../../NetworkConnect/APIEndPoints';
import {ApiHit} from '../../../NetworkConnect/APIHit';

export default () => {
  const [results, setResults] = useState();
  const [salons, setSalons] = useState();

  const hitApi = async (endpoint) => {
    const params = {lat: 49.2501, lng: -123.0824, per_page: 10, page: 1};
    // const [endpoint, baseurl] = APIEndPoints()
    console.log('home screen view model', endpoint);
    let salonEndPoint = APIEndPoints.salons;

    await ApiHit.get(endpoint, {
      params: params,
      // headers: {
      //   'device-token': 'ccnsnamncnnsnmcsmcncmnnccmdnsmn',
      // },
    })
      .then(function (response) {
        // console.log('response');
        console.log("endpoint found inside response succ", endpoint, salonEndPoint);
        if (endpoint === salonEndPoint) {
          setSalons(response);
          // console.log('end point of api', response);
        } else {
          setResults(response);
        }

      })
      .catch(function (error) {
                console.log("endpoint found inside response error", endpoint, salonEndPoint);
        // console.log('result error');
        // console.log(error);
        // console.log(error.message);
      });
  };
  useEffect(() => {
    hitApi(APIEndPoints.deals);
    hitApi(APIEndPoints.salons);
  }, []);

  return [results, salons];
};

import React, {useState, useEffect} from 'react';
import {APIEndPoints, BaseUrl} from '../../../NetworkConnect/APIEndPoints';
import {ApiHit} from '../../../NetworkConnect/APIHit';

export default () => {
  const [results, setResults] = useState();
  const [salons, setSalons] = useState();
  const [category, setCategory] = useState();

  // enum APIS = {Salons, Deals, Category}
  const APIS = {Salons: 0, Deals: 1, Category: 2};

  const hitApi = async (apiType) => {
    const params = {lat: 49.2501, lng: -123.0824, per_page: 10, page: 1};
    let endpoint = APIEndPoints.salons;
    switch (apiType) {
      case APIS.Salons:
        endpoint = APIEndPoints.salons;
        break;
      case APIS.Deals:
        endpoint = APIEndPoints.deals;
        break;
      case APIS.Category:
        endpoint = APIEndPoints.categories;
        break;
      default:
        break;
    }
    // console.log('scbmbcmmnbnmnb123mnmbmn', endpoint);
    await ApiHit.get(endpoint, {
      params: params,
    })
      .then(function (response) {
        // console.log('response');

        switch (apiType) {
          case APIS.Salons:
            setSalons(response);
            break;
          case APIS.Deals:
            setResults(response);
            break;
          case APIS.Category:
            setCategory(response);
            break;
          default:
            break;
        }
      })
      .catch(function (error) {
        console.log(' error', endpoint, error);
      });
  };
  useEffect(() => {
    hitApi(APIS.Deals);
    hitApi(APIS.Salons);
    hitApi(APIS.Category);
  }, []);

  return [results, salons, category];
};

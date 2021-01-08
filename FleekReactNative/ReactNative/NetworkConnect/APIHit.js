import axios from 'axios';
import {APIEndPoints, BaseUrl} from './APIEndPoints';
export var ApiHit = axios.create({
  baseURL: APIEndPoints.baseurl, //'https://demo.softprodigyphp.in/Fleek/public/api/v1/',
  timeout: 1000,
  headers: {'device-token': 'dcmbmcbmcnbdnbcmndcnbcdns'},
});

import axios from 'axios';
import {APIEndPoints, BaseUrl} from './APIEndPoints';
export var ApiHit = axios.create({
  baseURL: 'https://demo.softprodigyphp.in/Fleek/public/api/v1/',
  timeout: 30000,
  headers: {'device-token': 'dcmbmcbmcnbdnbcmndcnbcdns'},
});

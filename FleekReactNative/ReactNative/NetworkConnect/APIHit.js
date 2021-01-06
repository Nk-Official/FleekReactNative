import axios from 'axios';
import {APIEndPoints, BaseUrl} from './APIEndPoints';
export var ApiHit = axios.create({
  baseURL: BaseUrl,
  timeout: 1000,
  headers: {'device-token': 'dcmbmcbmcnbdnbcmndcnbcdns'},
});

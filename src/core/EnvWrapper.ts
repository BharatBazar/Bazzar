import { Platform } from 'react-native';
import Config from 'react-native-config';

export const envType = {
    Test: 'test',
    Prod: 'prod',
};

console.log(Config, 'Config');

export const Envar = {
    APIENDPOINT: Platform.OS == 'android' ? 'http://192.168.219.83:2112' : 'http://localhost:2112',
    APIENDPOINT1: Platform.OS == 'android' ? 'http://192.168.219.83:2113' : 'http://localhost:2113',
    ENV: Config.ENV,
    APITIMEOUT: Config.API_TIMEOUT,
};

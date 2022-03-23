import Config from 'react-native-config';

export const envType = {
    Test: 'test',
    Prod: 'prod',
};

export const Envar = {
    APIENDPOINT: Config.API_ENDPOINT,
    ENV: Config.ENV,
    APITIMEOUT: Config.API_TIMEOUT,
};

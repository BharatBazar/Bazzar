import { Envar } from '@app/core/EnvWrapper';
import { Storage, StorageItemKeys } from '@app/utilities/AsyncStorage';
import axios from 'axios';

async function setUpAxiosUserToken() {
    const token = await Storage.getItem(StorageItemKeys.Token);

    axios.defaults.headers.common['Bazzar-Auth-Token'] = token;
}

const handleError = (error: { isAxiosError: any; response: { data: any } }) => {
    let message = '';
    let errorCode = 200;
    console.log(error.response.data);

    if (error.response.data) {
        const data = error.response.data;
        if (data.message) {
            message = data.message;
            errorCode = error.response.data.errorCode;
        }
    }

    if (errorCode === 1) {
        return Promise.reject({ message, errorCode });
    }

    if (errorCode === 5) {
        return Promise.reject({ message, errorCode });
    }

    //This is done because crashlytics expects Error instance
    return Promise.reject(Error(message));

    //return Promise.reject({message, errorCode})
};

function isNetworkError(err: { isAxiosError: any; response: { data: any } }) {
    return !!err.isAxiosError && !err.response && !err.response;
}

export const setBaseUrl = () => {
    axios.defaults.baseURL = Envar.APIENDPOINT;
};
export const initializeAxios = () => {
    console.log('Axios initialization', Envar.APIENDPOINT);
    // setBaseUrl();
    if (axios.interceptors.response.handlers.length == 0) {
        console.log('Setting response handler');
        axios.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (isNetworkError(error)) {
                    // networkError();
                    throw new Error('Network error');
                } else {
                    return handleError(error);
                }
            },
        );
    }
};

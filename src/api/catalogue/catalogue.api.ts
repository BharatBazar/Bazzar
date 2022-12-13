import { Envar } from '@app/core/EnvWrapper';
import axios from 'axios';
import { getCatalogueResponse } from './catalogue.interface';

export function getCatalogueDetailsAPI(): Promise<getCatalogueResponse> {
    return axios.get(Envar.APIENDPOINT + '/customer/get/catalogue');
}

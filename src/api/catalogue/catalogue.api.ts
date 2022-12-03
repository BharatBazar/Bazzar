import axios from 'axios';
import { getCatalogueResponse } from './catalogue.interface';

export function getCatalogueDetailsAPI(): Promise<getCatalogueResponse> {
    return axios.get('/customer/get/catalogue');
}

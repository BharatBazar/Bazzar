import { IFilter, IRGetFilterWithValue, IRGetProduct, IRGetProductDetails, IRGetShopDetail } from './product.interface';
import axios from 'axios';

export function getProduct(data: { [key: string]: [string] }): Promise<IRGetFilterWithValue> {
    return axios.post('/customer/filter/items', data);
}

export function getProductDetails(data: { _id: string }): Promise<IRGetProductDetails> {
    return axios.post('/customer/get', data);
}

export function getShopDetails(data: { _id: string }): Promise<IRGetShopDetail> {
    return axios.post('/customer/shop/get', data);
}

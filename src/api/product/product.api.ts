import {
    IFilter,
    IRGetFilterWithValue,
    IRGetProduct,
    IRGetProductDetails,
    IRGetShopDetail,
    GetProductListResponse,
    productStatus,
} from './product.interface';
import axios from 'axios';
import { Envar } from '@app/core/EnvWrapper';

export function getProductAfterFilterAPI(data: {
    listToShow: 'shop' | 'product';
    lastTime: undefined | number;

    query: { parentId: string; status: productStatus } & { [key: string]: string };
}): Promise<GetProductListResponse> {
    return axios.post(Envar.APIENDPOINT + '/customer/filter/items', data);
}

export function getProductDetails(data: { _id: string }): Promise<IRGetProductDetails> {
    return axios.post(Envar.APIENDPOINT + '/customer/get/product', data);
}

export function getShopDetails(data: { _id: string }): Promise<IRGetShopDetail> {
    return axios.post(Envar.APIENDPOINT + '/customer/shop/get', data);
}

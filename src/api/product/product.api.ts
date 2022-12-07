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

export function getProductAfterFilterAPI(data: {
    listToShow: 'shop' | 'product';
    lastTime: undefined | number;

    query: { parentId: string; status: productStatus } & { [key: string]: string };
}): Promise<GetProductListResponse> {
    return axios.post('/customer/filter/items', data);
}

export function getProductDetails(data: { _id: string }): Promise<IRGetProductDetails> {
    return axios.post('/customer/get/product', data);
}

export function getShopDetails(data: { _id: string }): Promise<IRGetShopDetail> {
    return axios.post('/customer/shop/get', data);
}

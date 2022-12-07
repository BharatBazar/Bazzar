import {
    IFilter,
    IRGetFilterWithValue,
    IRGetProduct,
    IRGetProductDetails,
    IRGetShopDetail,
    GetProductDetailsResponse,
} from './product.interface';
import axios from 'axios';

export function getProduct(data: {
    listToShow: 'shop' | 'product';
    query: { parentId: string; lastTime: undefined | string };
}): Promise<GetProductDetailsResponse> {
    return axios.post('/customer/filter/items', data);
}

export function getProductDetails(data: { _id: string }): Promise<IRGetProductDetails> {
    return axios.post('/customer/get/product', data);
}

export function getShopDetails(data: { _id: string }): Promise<IRGetShopDetail> {
    return axios.post('/customer/shop/get', data);
}

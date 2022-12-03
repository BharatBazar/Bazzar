import { CommonApiResponse } from './../common.interface';
export interface catalogueData {
    customer_name: string;
    customer_image: string;
    customer_description: string;
    type: string;
}

export interface getCatalogueResponse extends CommonApiResponse {
    payload: catalogueData[];
}

import { IFilter, IRGetFilterWithValue } from './product.interface';
import axios from 'axios';

export function getFilterWithValueAPI(data: { parent: string }): Promise<IRGetFilterWithValue> {
    return axios.post('customer/filter/getValue', data);
}

import { IFilter, IRGetFilterWithValue } from './product.interface';
import axios from 'axios';

export function getFilterWithValue(data: Partial<IFilter>): Promise<IRGetFilterWithValue> {
    return axios.post('/filter/getAllWithValue', data);
}

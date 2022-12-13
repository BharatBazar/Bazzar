import { IFilter, IRGetFilterWithValue } from './product.interface';
import axios from 'axios';
import { Envar } from '@app/core/EnvWrapper';

export function getFilterWithValueAPI(data: { parent: string }): Promise<IRGetFilterWithValue> {
    return axios.post(Envar.APIENDPOINT + '/customer/filter/getValue', data);
}

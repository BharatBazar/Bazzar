import { CommonApiResponse } from './../common.interface';

//classifier type is very important as this gives what filter to update in ui
// so name should match the document field
// also this is the medium of connection between filter and its value
export enum classifierTypes {
    SIZE = 'size',
    COLOR = 'color',
    BRAND = 'brand',
    PATTERN = 'pattern',
    FIT = 'fit',
}

export interface IClassfier {
    name: string; // Name should be any thing like value for example for size name will be 28, for color name will be red etc..
    description: string; // Description should be meta data or for example for color colorCode will be description, for size unit like cm or inch will be description
    image: string; // Can be provided for pattern or brand etc..
    type: classifierTypes; //type is the classifier to which the document belongs
    parent: string;
    active: boolean;
}

export interface IFilter {
    _id: string;
    name: string; // Filter name Like waist size
    description: string; // Filter details descipbing about filter
    image: string; // Image url
    type: classifierTypes; // It will refer to the type to which the filter belongs
    multiple: boolean; // Multiple values can be selected or not
    distributionLevel: number; // 0 means filter only and 1 means It is top level distribution like color 2 means inside distibution that is size or etc.
    active: boolean; // It is used to active a filter and show it publically so that filter can through a verifying flow and all good then they are release to public
    mandatory: boolean;
}

export interface IRFilter {
    _id: string;
    name: string; // Filter name Like waist size
    description: string; // Filter details descipbing about filter
    image: string; // Image url
    type: classifierTypes; // It will refer to the type to which the filter belongs
    multiple: boolean; // Multiple values can be selected or not
    distributionLevel: number; // 0 means filter only and 1 means It is top level distribution like color 2 means inside distibution that is size or etc.
    active: boolean; // It is used to active a filter and show it publically so that filter can through a verifying flow and all good then they are release to public
    mandatory: boolean;
    values: IClassfier[];
}

export interface IRGetFilter extends CommonApiResponse {
    payload: IFilter[];
}

export interface IRGetFilterWithValue extends CommonApiResponse {
    payload: {
        filter: IRFilter[];
        distribution: IRFilter[];
    };
}

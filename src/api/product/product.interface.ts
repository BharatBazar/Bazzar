import { CommonApiResponse } from './../common.interface';

/**classifier type is very important as this gives what filter to update in ui
 * so name should match the document field
 * also this is the medium of connection between filter and its value
 */
export enum classifierTypes {
    SIZE = 'size',
    COLOR = 'color',
    BRAND = 'brand',
    PATTERN = 'pattern',
    FIT = 'fit',
}

export interface IClassifier {
    _id: string;
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
    values: IClassifier[];
}

export enum productStatus {
    INVENTORY = 1,
    REJECTED = 2,
    OUTOFSTOCK = 3,
    WAITINGFORAPPROVAL = 4,
    LIVE = 5,
}

export interface IProductSize {
    _id: string;
    size: IClassifier; //Will refer to size table
    mrp: string;
    quantity: number;
    sp: string;
    parentId: string;
    itemId: string;
}

export interface IColor {
    _id: string;
    parentId: string; // will refer to main table
    color: IClassifier; // will refer to color table
    sizes: [IProductSize]; // will refer to jeans size table
    photos: [string];
    includedColor: [IClassifier];
    shopId: string;
}

export interface IProduct {
    //Also i need to think about how i will be dealing with language preferences how can i use multiple language.
    _id: string;
    shopId: IShop;

    //Above field will have predifined information about the size, unit etc.
    title: string;
    subTitle: string;
    colors: [IColor] | [string] | [];
    showPrice: boolean; //Whether dukandar wants to show price to customer or not
    returnAllowed: boolean;
    status: productStatus;
    rating: number;
    new: boolean; // Sometimes customer comes to shop asking what is new in the shop so this will show all the new available products
    newDeadline: string;
    description: string; // Will be a audio as audio is better to understand in common language
    discount: [number]; // If a dukandar has decided that he wants to give special discount on particular product so discount will for each color
    discountDeadline: [Date];
    brand: string | [IClassifier];
    fit: string | [IClassifier];
    pattern: [string] | [IClassifier];
    note: string;
    descriptionCustomer: string;
    alreadyRejected: boolean;
}

export enum verificationStatus {
    registered = 'Registered',
    processing = 'Processing',
    rejected = 'Rejected',
    verified = 'Verified',
}

export interface IShopMember {
    firstName: string;
    lastName: string;
    //photo: [{_id:ObjectId}];
    permissions: string;
    phoneNumber: string;
    shop: IShop;
    role: string;
    _id: string;
    password: string;
    isTerminated: boolean;
    isDeleted: boolean;
    languagePreference: ['Hindi', 'English', 'Message'];
}
export interface IShop {
    _id: string;
    shopName: string;
    shopDescription: string;
    addressOfShop: string;

    verificationStatus: verificationStatus;
    remarks: string;
    // whatYouSell: string[];

    state: IClassifier;
    city: IClassifier;
    area: IClassifier;
    pincode: IClassifier;
    localAddress: string;

    owner: IShopMember;
    coOwner: IShopMember[];
    worker: IShopMember[];

    isVerified: boolean;
    isTerminated: boolean;
    membersDetailSkipped: boolean;
    rating: Number;
    noOfRating: Number;
    category: [IClassifier];
    subCategory: [[IClassifier]];
    subCategory1: [[[IClassifier]]];
    shopMemberOnBoardingDone: boolean;
}

export interface IRGetFilter extends CommonApiResponse {
    payload: IFilter[];
}

export interface FilterValueData {
    customerName: string;
    customerDescription: string;
    customerImage: string;
    type: string;
    _id: string;
}
export interface FilterAndValues {
    customerHeading: string;
    customerDescription: string;
    customerImage: string;
    type: string;
    key: string;
    _id: string;
    values: FilterValueData[];
}

export interface IRGetFilterWithValue extends CommonApiResponse {
    payload: FilterAndValues[];
}

export interface IRGetProduct extends CommonApiResponse {
    payload: {
        product: IProduct[];
    };
}

export interface IRGetProductDetails extends CommonApiResponse {
    payload: IProduct;
}

export interface IRGetShopDetail extends CommonApiResponse {
    payload: IShop;
}

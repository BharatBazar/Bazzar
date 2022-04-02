import { ViewStyle } from 'react-native';

export const PHA = (value?: number | string): ViewStyle => {
    return { paddingHorizontal: value };
};

export const PVA = (value?: number | string): ViewStyle => {
    return { paddingVertical: value };
};

export const PTA = (value?: number | string): ViewStyle => {
    return { paddingTop: value };
};
export const MHA = (value?: number | string): ViewStyle => {
    return { marginHorizontal: value };
};
export const MVA = (value?: number | string): ViewStyle => {
    return { marginVertical: value };
};

export const PLA = (value?: number | string): ViewStyle => {
    return { paddingLeft: value };
};

export const PRA = (value?: number | string): ViewStyle => {
    return { paddingRight: value };
};

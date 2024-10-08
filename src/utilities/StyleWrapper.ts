import { FontFamily } from './FontFamily';
import { GENERAL_BOUNDARY_SPACE, getHP } from './Dimensions';
import { ViewStyle, TextStyle } from 'react-native';

export const PHA = (value?: number | string): ViewStyle => {
    return { paddingHorizontal: value || GENERAL_BOUNDARY_SPACE };
};

export const PA = (value?: number | string): ViewStyle => {
    return { padding: value || GENERAL_BOUNDARY_SPACE };
};

export const PBA = (value?: number | string): ViewStyle => {
    return { paddingBottom: value || GENERAL_BOUNDARY_SPACE };
};

export const PVA = (value?: number | string): ViewStyle => {
    return { paddingVertical: value || GENERAL_BOUNDARY_SPACE };
};

export const PTA = (value?: number | string): ViewStyle => {
    return { paddingTop: value || GENERAL_BOUNDARY_SPACE };
};
export const MHA = (value?: number | string): ViewStyle => {
    return { marginHorizontal: value || GENERAL_BOUNDARY_SPACE };
};
export const MVA = (value?: number | string): ViewStyle => {
    return { marginVertical: value || GENERAL_BOUNDARY_SPACE };
};

export const MTA = (value?: number | string): ViewStyle => {
    return { marginTop: value || GENERAL_BOUNDARY_SPACE };
};
export const MBA = (value?: number | string): ViewStyle => {
    return { marginBottom: value || GENERAL_BOUNDARY_SPACE };
};

export const MLA = (value?: number | string): ViewStyle => {
    return { marginLeft: value || GENERAL_BOUNDARY_SPACE };
};

export const MRA = (value?: number | string): ViewStyle => {
    return { marginRight: value || GENERAL_BOUNDARY_SPACE };
};
export const PLA = (value?: number | string): ViewStyle => {
    return { paddingLeft: value || GENERAL_BOUNDARY_SPACE };
};

export const PRA = (value?: number | string): ViewStyle => {
    return { paddingRight: value || GENERAL_BOUNDARY_SPACE };
};

export const BRA = (value?: number): ViewStyle => {
    return { borderRadius: value || GENERAL_BOUNDARY_SPACE };
};

export const HA = (value?: number): ViewStyle => {
    return { height: value || GENERAL_BOUNDARY_SPACE };
};

export const WA = (value?: number): ViewStyle => {
    return { width: value || GENERAL_BOUNDARY_SPACE };
};

export const POS = (
    pos: 'absolute' | 'relative',
    left = undefined,
    right = undefined,
    top = undefined,
    bottom = undefined,
): ViewStyle => {
    return { position: pos || 'absolute', left, top, right, bottom };
};

export const FF = (fontFamily: 'Bold' | 'SemiBold' | 'ExtraBold' | 'Light' | 'Medium' | 'Regular'): TextStyle => {
    return { fontFamily: FontFamily[fontFamily] };
};

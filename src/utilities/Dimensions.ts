import { Dimensions, NativeModules, Platform, StatusBar } from 'react-native';

const { StatusBarManager } = NativeModules;
// window: reports width/height without the soft menu bar
// screen: reports entire screen's width/height
const { width, height } = Dimensions.get('window');

export const getWP = (percentage: number) => {
    return (width / 10) * percentage;
};

export const getHP = (percentage: number) => {
    return (height / 10) * percentage;
};

export const STATUS_BAR_HEIGHT = Platform.OS == 'android' ? StatusBar.currentHeight : StatusBarManager.HEIGHT;

import * as React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ripple from 'react-native-material-ripple';
import Colors from '@app/utilities/Colors';
import { ViewStyle, StyleSheet } from 'react-native';
import { AIC, JCC } from '@app/utilities/Styles';

interface ButtonFeatherIconProps {
    onPress: Function;
    iconName: string;
    iconColor?: string;
    iconSize?: number;
    rippleColor?: string;
    containerStyle?: ViewStyle | ViewStyle[];
    rippleContainerBorderRadius?: number;
}

const ButtonFeatherIcon: React.FunctionComponent<ButtonFeatherIconProps> = ({
    onPress,
    iconName,
    iconColor,
    iconSize = 15,
    rippleColor,
    containerStyle,
    rippleContainerBorderRadius = 100,
}) => {
    return (
        <Ripple
            style={[{ height: iconSize + 15, width: iconSize + 15, borderRadius: 100 }, AIC(), JCC(), containerStyle]}
            rippleContainerBorderRadius={rippleContainerBorderRadius}
            rippleCentered
            rippleColor={rippleColor}
            onPress={() => {
                onPress();
            }}
        >
            <FeatherIcon
                name={iconName}
                style={{ height: iconSize, width: iconSize }}
                size={iconSize}
                color={iconColor || Colors.white}
            />
        </Ripple>
    );
};

export default ButtonFeatherIcon;

const styles = StyleSheet.create({
    containerStyle: {},
});

import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import Colors from '@app/utilities/Colors';
import { ViewStyle, StyleSheet } from 'react-native';
import { AIC, JCC } from '@app/utilities/Styles';

interface ButtonMaterialIconsProps {
    onPress: Function;
    iconName: string;
    iconColor?: string;
    iconSize?: number;
    rippleColor?: string;
    containerStyle?: ViewStyle | ViewStyle[];
    rippleContainerBorderRadius?: number;
}

const ButtonMaterialIcons: React.FunctionComponent<ButtonMaterialIconsProps> = ({
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
            <MaterialIcons
                name={iconName}
                style={{ height: iconSize, width: iconSize }}
                size={iconSize}
                color={iconColor || Colors.white}
            />
        </Ripple>
    );
};

export default ButtonMaterialIcons;

const styles = StyleSheet.create({
    containerStyle: {},
});

import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, FDR, JCC } from '@app/utilities/Styles';
import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import Ripple from 'react-native-material-ripple';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ButtonRippleLeftMaterialIconMiddleTextRightChildProps {
    containerStyle?: ViewStyle | ViewStyle[];
    onPress: Function;
    buttonText?: string;
    fontSize?: number;
    textStyle?: TextStyle[] | TextStyle;
    rippleColor?: string;
    buttonTextColor?: string;
    rippleContainerBorderRadius?: number;

    iconName?: string;
    iconColor?: string;
    iconSize?: number;
    children?: any;
}

const ButtonRippleLeftMaterialIconMiddleTextRightChild: React.FunctionComponent<
    ButtonRippleLeftMaterialIconMiddleTextRightChildProps
> = ({
    buttonText,
    onPress,
    buttonTextColor,
    containerStyle,
    fontSize,
    textStyle,
    rippleColor,
    rippleContainerBorderRadius = 100,
    iconColor = Colors.black,
    iconName,
    iconSize,
    children,
}) => {
    return (
        <Ripple
            rippleColor={rippleColor}
            onPress={() => {
                onPress();
            }}
            style={[FDR(), AIC(), JCC(), containerStyle]}
        >
            {iconName != undefined && (
                <MaterialIcons
                    name={iconName}
                    style={{ height: iconSize, width: iconSize }}
                    size={iconSize}
                    color={iconColor || Colors.white}
                />
            )}
            {buttonText && (
                <TextBasic
                    text={buttonText}
                    textColor={buttonTextColor}
                    fontSize={fontSize}
                    fontFamily={FontFamily.Medium}
                    containerStyle={{ marginTop: 0 }}
                    textStyle={textStyle}
                />
            )}
            {children && children}
        </Ripple>
    );
};

export default ButtonRippleLeftMaterialIconMiddleTextRightChild;

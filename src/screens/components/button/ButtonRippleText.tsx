import TextBasic from '@app/screens/components/text/TextBasic';
import { FontFamily } from '@app/utilities/FontFamily';
import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import Ripple from 'react-native-material-ripple';

interface ButtonRippleTextProps {
    containerStyle?: ViewStyle | ViewStyle[];
    onPress: Function;
    buttonText: string;
    fontSize?: number;
    textStyle?: TextStyle;
    rippleColor?: string;
    buttonTextColor?: string;
    rippleContainerBorderRadius?: number;
}

const ButtonRippleText: React.FunctionComponent<ButtonRippleTextProps> = ({
    buttonText,
    onPress,
    buttonTextColor,
    containerStyle,
    fontSize,
    textStyle,
    rippleColor,
    rippleContainerBorderRadius = 100,
}) => {
    return (
        <Ripple
            rippleColor={rippleColor}
            onPress={() => {
                onPress();
            }}
            style={containerStyle}
        >
            <TextBasic
                text={buttonText}
                textColor={buttonTextColor}
                fontSize={fontSize}
                fontFamily={FontFamily.Medium}
                containerStyle={{ marginTop: 0 }}
                textStyle={textStyle}
            />
        </Ripple>
    );
};

export default ButtonRippleText;

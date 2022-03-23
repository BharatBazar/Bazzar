import { TextStyle, ViewStyle } from 'react-native';
import Ripple from 'react-native-material-ripple';

interface TextRippleButtonProps {
    containerStyle?: ViewStyle | ViewStyle[];
    onPress: Function;
    buttonText: string;
    fontSize: number;
    textStyle?: TextStyle;
    rippleColor?: string;
    buttonTextColor?: string;
}

const TextRippleButton: React.FunctionComponent<TextRippleButtonProps> = ({
    onPress,

    containerStyle,

    rippleColor,
}) => {
    return (
        <Ripple
            rippleColor={rippleColor}
            onPress={() => {
                if (onPress) {
                    onPress();
                }
            }}
            style={containerStyle}
        ></Ripple>
    );
};

export default TextRippleButton;

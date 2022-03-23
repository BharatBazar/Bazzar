import * as React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ripple from 'react-native-material-ripple';

interface ButtonFeatherIconProps {
    onPress: Function;
    iconName: 'chevron-left';
}

const ButtonFeatherIcon: React.FunctionComponent<ButtonFeatherIconProps> = ({ onPress, iconName }) => {
    return (
        <Ripple onPress={onPress}>
            <FeatherIcon name={iconName} style={{ height: 15, width: 15 }} size={15} color={'#000000'} />
        </Ripple>
    );
};

export default ButtonFeatherIcon;

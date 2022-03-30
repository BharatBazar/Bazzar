import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as React from 'react';
import Colors from '@app/utilities/Colors';

interface MaterialIconWrapperProps {
    iconColor: string;
    iconName: string;
    iconSize: number;
}

const MaterialIconWrapper: React.FunctionComponent<MaterialIconWrapperProps> = ({
    iconColor = Colors.black,
    iconName,
    iconSize,
}) => {
    return (
        <MaterialIcons
            name={iconName}
            style={{ height: iconSize, width: iconSize }}
            size={iconSize}
            color={iconColor || Colors.white}
        />
    );
};

export default MaterialIconWrapper;

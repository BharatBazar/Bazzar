import Colors from '@app/utilities/Colors';
import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface BorderProps {
    marginTop?: string | number;
    borderStyle?: ViewStyle | ViewStyle[];
    borderWidth?: number;
}

const Border: React.FunctionComponent<BorderProps> = ({ marginTop, borderStyle, borderWidth }) => {
    return (
        <View
            style={[
                styles.borderStyle,
                borderStyle,
                { marginTop: marginTop != undefined ? marginTop : '4%', borderTopWidth: borderWidth || 0.2 },
            ]}
        />
    );
};

export default Border;

const styles = StyleSheet.create({
    borderStyle: {
        borderTopWidth: 0.2,
        borderColor: Colors.blackShadePrimary,
        opacity: 0.1,
        marginTop: '4%',
    },
});

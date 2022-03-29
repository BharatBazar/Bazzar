import { FontFamily } from '@app/utilities/FontFamily';
import * as React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import TextBasic from '../text/TextBasic';

interface HeaderWithTitleAndSubHeadingProps {
    heading: string;
    subHeading?: string;
    headerStyle?: TextStyle | TextStyle[];
    subHeaderStyle?: TextStyle | TextStyle[];
    bottomBorderStyle?: ViewStyle | ViewStyle[];
    headerContainerStyle?: ViewStyle | ViewStyle[];
    borderNeeded?: boolean;
}

const HeaderWithTitleAndSubHeading: React.FunctionComponent<HeaderWithTitleAndSubHeadingProps> = ({
    heading,
    subHeading,
    bottomBorderStyle,
    headerStyle,
    headerContainerStyle,

    subHeaderStyle,
}) => {
    return (
        <View style={headerContainerStyle}>
            <TextBasic text={heading} fontFamily={FontFamily.Medium} fontSize={18} textStyle={headerStyle} />
            {typeof subHeading === 'string' && (
                <TextBasic
                    text={subHeading}
                    fontSize={12}
                    textColor={'#8a8a8a'}
                    fontFamily={FontFamily.Light}
                    textStyle={[{ marginTop: 0 }, subHeaderStyle]}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    borderStyle: {
        borderTopWidth: 2,
        borderColor: '#500061',
        opacity: 0.1,
        marginTop: '4%',
    },
});

export default HeaderWithTitleAndSubHeading;

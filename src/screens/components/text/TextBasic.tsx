import { FontFamily } from '@app/utilities/FontFamily';
import React from 'react';
import { Image, Text, StyleSheet, View, TextStyle } from 'react-native';

function TextBasic(props: {
    fontFamily?: string;

    textStyle?: TextStyle;
    fontSize?: number;

    textColor?: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;

    text: string;

    ellipsizeMode?: 'tail' | 'head' | 'middle' | 'clip' | undefined;
    numberOfLines?: number;
    containerStyle?: any;
    textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
}) {
    const {
        fontFamily,
        fontSize,
        fontWeight,

        textColor,
        text,

        containerStyle,
        ellipsizeMode,
        numberOfLines,
        textStyle,
        textAlign,
    } = props;

    return (
        <Text
            style={[
                {
                    fontFamily: fontFamily || FontFamily.SemiBold,
                    fontSize: fontSize || 11,

                    //fontWeight: fontWeight || 'normal',
                    color: textColor || '#000000',
                    flexWrap: 'wrap',
                    textAlign: textAlign || 'auto',
                    flexShrink: 1,
                },
                textStyle,
            ]}
            ellipsizeMode={ellipsizeMode || 'tail'}
            numberOfLines={numberOfLines || undefined}
        >
            {text}
        </Text>
    );
}

export default TextBasic;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
});

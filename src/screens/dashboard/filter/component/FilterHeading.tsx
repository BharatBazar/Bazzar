import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import React from 'react';

interface FitlerHeadingProps {
    heading: string;
    subHeading: string;
}

const FitlerHeading: React.FunctionComponent<FitlerHeadingProps> = ({ heading, subHeading }) => {
    return (
        <>
            <TextBasic text={heading} fontSize={14} fontFamily={FontFamily.SemiBold} />
            <TextBasic text={subHeading} fontSize={12} textColor={Colors.subHeading} fontFamily={FontFamily.Light} />
        </>
    );
};

export default FitlerHeading;

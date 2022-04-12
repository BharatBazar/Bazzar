import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, provideShadow } from '@app/utilities/Styles';
import { MTA, PA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { View } from 'react-native';

interface TestionialProps {}

const Testionial: React.FunctionComponent<TestionialProps> = () => {
    return (
        <View style={[BGCOLOR(Colors.white), provideShadow(2), MTA(5), PA()]}>
            <TextBasic text={'Dukandar testimonial'} fontFamily={FontFamily.SemiBold} fontSize={14} />
            <TextBasic
                text={' - Try the product it is very good you will not get any complain '}
                fontFamily={FontFamily.Light}
                textStyle={[MTA(5)]}
            />
            <TextBasic
                text={'- Also we are selling at very resonalble rate '}
                fontFamily={FontFamily.Light}
                textStyle={[MTA(5)]}
            />
            <TextBasic
                text={'- It can be wore on white, black shirt.'}
                fontFamily={FontFamily.Light}
                textStyle={[MTA(5)]}
            />
            <TextBasic
                text={'- Quality of cloth is also very good and long lasting '}
                fontFamily={FontFamily.Light}
                textStyle={[MTA(5)]}
            />
        </View>
    );
};

export default Testionial;

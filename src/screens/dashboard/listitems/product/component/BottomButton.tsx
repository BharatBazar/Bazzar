import ButtonRippleLeftMaterialIconMiddleTextRightChild from '@app/screens/components/button/ButtonRippleLeftMaterialIconMiddleTextRightChild';

import Colors from '@app/utilities/Colors';

import { BGCOLOR, FDR, FLEX, HP, provideShadow } from '@app/utilities/Styles';
import { FF, MLA, POS } from '@app/utilities/StyleWrapper';
import React from 'react';
import { View } from 'react-native';

interface BottomBarProps {}

const BottomBar: React.FunctionComponent<BottomBarProps> = () => {
    return (
        <View style={[POS('absolute', 0, 0, undefined, 0), FDR(), HP(0.7), BGCOLOR(), provideShadow(10)]}>
            <ButtonRippleLeftMaterialIconMiddleTextRightChild
                onPress={() => {}}
                containerStyle={[FLEX(1), BGCOLOR(Colors.white)]}
                buttonText={'Ask question'.toLocaleUpperCase()}
                iconName={'chat'}
                iconSize={20}
                textStyle={[FF('SemiBold'), MLA(5)]}
                fontSize={13}
            />
            <ButtonRippleLeftMaterialIconMiddleTextRightChild
                onPress={() => {}}
                containerStyle={[FLEX(1), BGCOLOR(Colors.primary)]}
                buttonText={'Add to Favourite'.toLocaleUpperCase()}
                buttonTextColor={Colors.white}
                textStyle={[FF('SemiBold'), MLA(5)]}
                iconName={'favorite'}
                iconSize={20}
                iconColor={Colors.white}
                fontSize={13}
            />
        </View>
    );
};

export default BottomBar;

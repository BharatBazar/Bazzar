import { IColor, IProductSize } from '@app/api/product/product.interface';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BORDER_RADIUS, getHP } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BC, BGCOLOR, BW, FDR, FW, H, HP, JCC, provideShadow } from '@app/utilities/Styles';
import { BRA, HA, MLA, MRA, MTA, PA, WA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';

interface SelectColorProps {
    colors: IColor[];
    selectedColorIndex: number;
    setSelectedColorIndex: Function;
}

const SelectColor: React.FunctionComponent<SelectColorProps> = ({
    colors,
    selectedColorIndex,
    setSelectedColorIndex,
}) => {
    return (
        <View style={[BGCOLOR(Colors.white), provideShadow(2), MTA(), PA()]}>
            <View style={[FDR(), AIC()]}>
                <TextBasic
                    text={`Available in : `.toLocaleUpperCase()}
                    textColor={Colors.subHeading}
                    fontFamily={FontFamily.SemiBold}
                    fontSize={11}
                />
                <TextBasic
                    text={` ${colors.length} Colors`.toLocaleUpperCase()}
                    textColor={Colors.subHeading}
                    fontFamily={FontFamily.Bold}
                    fontSize={11}
                />
            </View>
            <View style={[FDR(), FW('wrap'), MTA()]}>
                {colors.map((item: IColor, index: number) => (
                    <Ripple
                        onPress={() => {
                            setSelectedColorIndex(index);
                        }}
                        style={{
                            borderWidth: index == selectedColorIndex ? 1.5 : 0,

                            borderRadius: GENERAL_BORDER_RADIUS,

                            borderColor: Colors.primary,
                            paddingVertical: 3,
                            paddingHorizontal: 2,
                            marginRight: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View style={[HP(0.8), WA(getHP(1)), BGCOLOR(Colors.white), provideShadow(4)]}>
                            <FastImageLoaderWithBg source={{ uri: item.photos[0] }} style={[HP(0.8), WA(getHP(1))]} />
                        </View>

                        <View style={[FDR(), AIC(), JCC(), MTA()]}>
                            <View style={[HA(), WA(), BGCOLOR(item.color.description), BRA(2)]} />
                            <TextBasic
                                text={item.color.name.toLocaleUpperCase()}
                                textColor={Colors.subHeading}
                                fontFamily={FontFamily.SemiBold}
                                fontSize={12}
                                textStyle={[MLA(2)]}
                            />
                        </View>
                    </Ripple>
                ))}
            </View>
            <TextBasic
                text={`Available size in selected color`}
                textColor={Colors.subHeading}
                fontFamily={FontFamily.SemiBold}
                fontSize={11}
                textStyle={[MTA()]}
            />
            <View style={[FDR(), FW('wrap')]}>
                {colors[selectedColorIndex].sizes.map((item: IProductSize, index: number) => (
                    <Ripple
                        key={index}
                        onPress={() => {}}
                        style={[
                            AIC(),
                            JCC(),
                            provideShadow(2),
                            BGCOLOR(),
                            BRA(2),
                            PA(15),
                            MRA(),
                            BW(1),
                            BC(Colors.borderColorPrimary),
                            MTA(),
                        ]}
                    >
                        <TextBasic
                            text={item.size.name.toLocaleUpperCase() + ' ' + item.size.description}
                            textColor={Colors.subHeading}
                            fontFamily={FontFamily.SemiBold}
                            fontSize={12}
                            textStyle={[MLA(2)]}
                        />
                    </Ripple>
                ))}
            </View>
        </View>
    );
};

export default SelectColor;

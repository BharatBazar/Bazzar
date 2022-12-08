import { IColor, IProductSize } from '@app/api/product/product.interface';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BORDER_RADIUS, GENERAL_BOUNDARY_SPACE, getHP } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BC, BGCOLOR, BW, FDR, FLEX, FW, H, HP, JCC, provideShadow } from '@app/utilities/Styles';
import { BRA, HA, MLA, MRA, MTA, PA, PBA, PHA, PVA, WA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

interface SelectColorProps {
    colors: IColor[];
    selectedColorIndex: number;
    setSelectedColorIndex: Function;
    selectedSizeIndex: number;
    setSelectedSizeIndex: Function;
}

const SelectColor: React.FunctionComponent<SelectColorProps> = ({
    colors,
    selectedColorIndex,
    setSelectedColorIndex,
    selectedSizeIndex,
    setSelectedSizeIndex,
}) => {
    return (
        <>
            <View style={[BGCOLOR(Colors.white), provideShadow(2), MTA(5), PA(), PBA(GENERAL_BOUNDARY_SPACE * 2)]}>
                <View style={[FDR(), JCC('space-between')]}>
                    <View style={[FDR(), AIC()]}>
                        <TextBasic
                            text={'Color : '}
                            textColor={Colors.heading}
                            fontFamily={FontFamily.Light}
                            fontSize={13}
                        />
                        <TextBasic
                            text={colors[selectedColorIndex].color.name.toLocaleUpperCase()}
                            textColor={Colors.blackShadePrimary}
                            fontFamily={FontFamily.Bold}
                            fontSize={13}
                        />
                    </View>
                    <View style={[FDR(), AIC()]}>
                        <TextBasic
                            text={
                                `Available in : `.toLocaleUpperCase() + ` ${colors.length} Colors`.toLocaleUpperCase()
                            }
                            textColor={Colors.subHeading}
                            fontFamily={FontFamily.Medium}
                            fontSize={11}
                        />
                    </View>
                </View>
                <View style={[FDR(), FW('wrap')]}>
                    {colors.map((item: IColor, index: number) => (
                        <Ripple
                            onPress={() => {
                                if (index != selectedColorIndex) {
                                    setSelectedSizeIndex(-1);
                                    setSelectedColorIndex(index);
                                }
                            }}
                            style={[
                                {
                                    borderWidth: index == selectedColorIndex ? 1.5 : 0,

                                    borderRadius: GENERAL_BORDER_RADIUS,

                                    borderColor: Colors.primary,

                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                },
                                BGCOLOR(Colors.white),
                                provideShadow(),
                                MTA(GENERAL_BOUNDARY_SPACE * 2),
                                MRA(GENERAL_BOUNDARY_SPACE * 2),
                            ]}
                        >
                            <View style={[HP(1), WA(getHP(1))]}>
                                <FastImageLoaderWithBg source={{ uri: item.photos[0] }} style={[HP(1), WA(getHP(1))]} />
                            </View>
                        </Ripple>
                    ))}
                </View>
            </View>
            <View style={[BGCOLOR(Colors.white), provideShadow(2), MTA(5), PA(), PBA(GENERAL_BOUNDARY_SPACE * 2)]}>
                <TextBasic
                    text={`Available sizes`}
                    textColor={Colors.heading}
                    fontFamily={FontFamily.SemiBold}
                    fontSize={14}
                />
                <View style={[FDR(), FW('wrap')]}>
                    {colors[selectedColorIndex].sizes.map((item: IProductSize, index: number) => (
                        <Ripple
                            key={index}
                            onPress={() => {
                                if (index != selectedSizeIndex) setSelectedSizeIndex(index);
                            }}
                            style={[
                                AIC(),
                                JCC(),
                                provideShadow(),
                                BGCOLOR(Colors.white),
                                BRA(GENERAL_BORDER_RADIUS),

                                PVA(),
                                PHA(),
                                MRA(),
                                BW(index == selectedSizeIndex ? 1 : 0),
                                BC(Colors.primary),
                                MTA(GENERAL_BOUNDARY_SPACE * 2),
                                MRA(GENERAL_BOUNDARY_SPACE * 2),
                            ]}
                        >
                            <TextBasic
                                text={item.size.name.toLocaleUpperCase() + ' ' + item.size.description}
                                textColor={Colors.heading}
                                fontFamily={FontFamily.Bold}
                                fontSize={12}
                                textStyle={[MLA(2)]}
                            />
                            <TextBasic
                                text={item.quantity + ' piece' + ' left'}
                                textColor={Colors.primary}
                                fontFamily={FontFamily.Light}
                                fontSize={10}
                                textStyle={[MLA(2)]}
                            />
                            {item.quantity == 0 && (
                                <>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            transform: [{ rotate: '35deg' }],

                                            width: 75,
                                            height: 4,

                                            borderBottomColor: Colors.lighter,
                                            borderBottomWidth: 1.5,
                                        }}
                                    />
                                </>
                            )}
                        </Ripple>
                    ))}
                </View>
            </View>
        </>
    );
};

export default SelectColor;

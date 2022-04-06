import { IColor } from '@app/api/product/product.interface';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { FDR } from '@app/utilities/Styles';
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
        <View style={[FDR()]}>
            {colors.map((item: IColor, index: number) => (
                <Ripple
                    onPress={() => {
                        setSelectedColorIndex(index);
                    }}
                >
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 10,
                            borderWidth: index == selectedColorIndex ? 1 : 0,
                            borderColor: Colors.primary,
                            padding: 2,
                            marginRight: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <FastImageLoaderWithBg
                            source={{ uri: item.photos[0] }}
                            style={{ height: 50, width: 40, borderRadius: 10 }}
                        />
                    </View>

                    <TextBasic text={item.color.name} />
                </Ripple>
            ))}
        </View>
    );
};

export default SelectColor;

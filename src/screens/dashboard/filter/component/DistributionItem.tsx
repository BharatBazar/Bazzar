import { classifierTypes, IClassfier, IRFilter } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors, { colorCode } from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { capitalizeFirstLetter } from '@app/utilities/Functions';
import { AIC, BGCOLOR, FDR, ML, provideShadow } from '@app/utilities/Styles';
import React from 'react';
import { View } from 'react-native';

interface DistributionItemProps {
    value: IClassfier;
    item: Partial<IRFilter>;
}

const DistributionItem: React.FunctionComponent<DistributionItemProps> = ({ value, item }) => {
    return (
        <View
            style={[
                ML(0.1),

                { padding: 8 },
                BGCOLOR('#FFFFFF'),
                provideShadow(),
                FDR(),
                AIC(),
                {
                    borderTopWidth: 0.2,
                    borderColor: Colors.primary,
                    overflow: 'hidden',
                    borderRadius: 4,
                },
            ]}
        >
            {item.type == classifierTypes.COLOR && (
                <View
                    style={[
                        {
                            height: 20,
                            width: 20,
                            borderRadius: 3,
                            backgroundColor: value.description,
                        },
                    ]}
                />
            )}
            <TextBasic
                text={capitalizeFirstLetter(
                    value.name + (item.type == classifierTypes.SIZE ? ' ' + value.description : ''),
                )}
                fontFamily={FontFamily.Medium}
                textStyle={{ marginLeft: 5, marginTop: 0, padding: 0 }}
                fontSize={13}
                textColor={colorCode.CHAKRALOW(50)}
            />
        </View>
    );
};

export default DistributionItem;

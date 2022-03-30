import { classifierTypes, IClassfier, IRFilter } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors, { colorCode } from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { capitalizeFirstLetter } from '@app/utilities/Functions';
import { AIC, BGCOLOR, FDR, ML, MR, MT, provideShadow } from '@app/utilities/Styles';
import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';

interface DistributionItemProps {
    value: IClassfier;
    item: Partial<IRFilter>;
    selected: boolean;
    onPress: Function;
}

const DistributionItem: React.FunctionComponent<DistributionItemProps> = ({ value, item, selected, onPress }) => {
    return (
        <Ripple
            style={[
                MR(0.2),
                MT(0.1),

                { paddingVertical: 6, paddingHorizontal: 10 },
                BGCOLOR(selected ? Colors.primaryLight : '#F4F4F4'),
                selected ? { borderWidth: 0.3, borderColor: Colors.primary } : {},
                FDR(),
                AIC(),
                {
                    overflow: 'hidden',
                    borderRadius: 6,
                },
            ]}
            onPress={() => {
                console.log('sd');
                onPress();
            }}
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
                fontFamily={FontFamily.SemiBold}
                textStyle={{ marginLeft: 5, marginTop: 0, padding: 0 }}
                fontSize={13}
                textColor={selected ? Colors.primary : Colors.blackShadePrimary}
            />
        </Ripple>
    );
};

export default DistributionItem;

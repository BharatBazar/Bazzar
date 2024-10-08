import { FilterAndValues, FilterValueData } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { capitalizeFirstLetter } from '@app/utilities/Functions';
import { AIC, BGCOLOR, FDR, MR } from '@app/utilities/Styles';
import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';

interface FilterValueProps {
    value: FilterValueData;
    item: Partial<FilterAndValues>;
    selected: boolean;
    onPress: Function;
    marginTop?: number;
}

const FilterValue: React.FunctionComponent<FilterValueProps> = ({ value, item, selected, onPress, marginTop }) => {
    return (
        <Ripple
            style={[
                MR(0.2),

                { paddingVertical: 6, paddingHorizontal: 10, marginTop: marginTop || 10 },
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
            {item.key?.includes('color') && (
                <View
                    style={[
                        {
                            height: 20,
                            width: 20,
                            borderRadius: 3,
                            backgroundColor: value.customerDescription,
                        },
                    ]}
                />
            )}
            <TextBasic
                text={capitalizeFirstLetter(
                    value.customerName + (item.key?.includes('size') ? ' ' + value.customerDescription : ''),
                )}
                fontFamily={FontFamily.SemiBold}
                textStyle={{ marginLeft: 5, marginTop: 0, padding: 0 }}
                fontSize={13}
                textColor={selected ? Colors.primary : Colors.blackShadePrimary}
            />
        </Ripple>
    );
};

export default FilterValue;

import { IRFilter } from '@app/api/product/product.interface';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { AIC, BGCOLOR, FDR, JCC, provideShadow } from '@app/utilities/Styles';
import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FilterPopup from './FilterPopup';

interface FilterUiProps {
    filters: IRFilter[];
    distribution: IRFilter[];
}

const FilterUi: React.FunctionComponent<FilterUiProps> = ({ filters, distribution }) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View
            style={[FDR(), { height: 45, width: '100%', borderBottomWidth: 0.3 }, BGCOLOR('#FFFFFF'), provideShadow(2)]}
        >
            <ScrollView
                style={{}}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                horizontal={true}
            >
                <TextBasic text="Applied filter will come here" textColor={Colors.light} fontSize={12} />
            </ScrollView>
            <ButtonRippleText
                fontSize={12}
                containerStyle={[
                    { height: '100%', paddingHorizontal: '5%', borderStartWidth: 1, borderColor: Colors.primary },
                    BGCOLOR(Colors.lighter),
                    AIC(),
                    JCC(),
                ]}
                onPress={() => {
                    setModalVisible(true);
                }}
                buttonText="Filters"
            />
            <FilterPopup
                distribution={distribution}
                filters={filters}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
};

export default FilterUi;

const styles = StyleSheet.create({});

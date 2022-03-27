import { IRFilter } from '@app/api/product/product.interface';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { AIC, BGCOLOR, FDR, JCC, provideShadow } from '@app/utilities/Styles';
import * as React from 'react';
import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import FilterPopup from './FilterPopup';

interface FilterUiProps {
    filters: IRFilter[];
    distribution: IRFilter[];
}

const FilterUi: React.FunctionComponent<FilterUiProps> = ({ filters, distribution }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [isEnabled, toggleSwitch] = React.useState(false);

    return (
        <View
            style={[
                FDR(),
                { height: 45, width: '100%', borderBottomWidth: 0.3, paddingLeft: '2%' },
                BGCOLOR('#FFFFFF'),
                provideShadow(2),
            ]}
        >
            <View style={[FDR(), AIC(), { borderEndWidth: 1, borderColor: Colors.primary }]}>
                <TextBasic text="Shops" />
                <Switch
                    trackColor={{ false: '#767577', true: Colors.primary }}
                    thumbColor={'#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <ScrollView
                style={{}}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}
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

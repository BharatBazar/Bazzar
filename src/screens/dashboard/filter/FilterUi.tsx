import { IRFilter } from '@app/api/product/product.interface';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
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
        <View style={[FDR(), { height: 45, width: '100%', paddingLeft: '2%' }, provideShadow(2), BGCOLOR('#FFFFFF')]}>
            <View style={[FDR(), AIC()]}>
                <TextBasic text="Shops" />
                <Switch
                    trackColor={{ false: '#bcbcbc', true: Colors.primary }}
                    thumbColor={'#ffffff'}
                    ios_backgroundColor="#bcbcbc"
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
                    { height: '100%', paddingHorizontal: '5%', borderStartWidth: 1, borderColor: '#c7c7c7' },
                    BGCOLOR(Colors.white),
                    AIC(),
                    JCC(),
                ]}
                onPress={() => {
                    setModalVisible(true);
                }}
                buttonText="Filters"
                textStyle={{ fontSize: 13, fontFamily: FontFamily.SemiBold }}
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

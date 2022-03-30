import { IRFilter } from '@app/api/product/product.interface';
import ButtonMaterialIcons from '@app/screens/components/button/ButtonMaterialIcons';
import ButtonRippleLeftMaterialIconMiddleTextRightChild from '@app/screens/components/button/ButtonRippleLeftMaterialIconMiddleTextRightChild';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import MaterialIconWrapper from '@app/screens/components/icon/MaterialIconWrapper';
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
    const [selectedFilter, setSelectedFilter] = React.useState<{ [key: string]: string[] }>({});

    const selectFilter = (type: string, value: string) => {
        let filterss: { [key: string]: string[] } = { ...selectedFilter };
        if (filterss[type]) {
            filterss[type].push(value);
        } else {
            filterss[type] = [value];
        }
        console.log('fiter select', filterss);
        setSelectedFilter(filterss);
    };

    const deselectFilter = (type: string, value: string) => {
        let filterss: { [key: string]: string[] } = { ...selectedFilter };
        if (filterss[type]) {
            filterss[type] = filterss[type].filter((item) => item != value);
            if (filterss[type].length == 0) {
                delete filterss[type];
            }
        } else {
        }
        setSelectedFilter(filterss);
    };

    const clearAllFilters = () => {
        setSelectedFilter({});
    };

    return (
        <View style={[FDR(), { height: 45, width: '100%' }, provideShadow(2), BGCOLOR('#FFFFFF')]}>
            <ButtonRippleLeftMaterialIconMiddleTextRightChild
                fontSize={12}
                onPress={() => {
                    toggleSwitch(!isEnabled);
                }}
                containerStyle={{ paddingLeft: 5 }}
                iconName={'store'}
                iconSize={25}
                iconColor={isEnabled ? Colors.primary : Colors.primaryLight}
                children={
                    <Switch
                        trackColor={{ false: '#bcbcbc', true: Colors.primary }}
                        thumbColor={'#ffffff'}
                        ios_backgroundColor="#bcbcbc"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ marginLeft: 0 }}
                    />
                }
            />
            <ScrollView
                style={{}}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}
                horizontal={true}
            >
                <TextBasic text="Applied filter will come here" textColor={Colors.light} fontSize={12} />
            </ScrollView>
            <ButtonRippleLeftMaterialIconMiddleTextRightChild
                fontSize={12}
                containerStyle={[styles.filterContainer]}
                onPress={() => {
                    setModalVisible(true);
                }}
                buttonText={
                    'Filter' +
                    (Object.keys(selectedFilter).length > 0 ? ` (${Object.keys(selectedFilter).length})` : '')
                }
                textStyle={{ fontSize: 13, fontFamily: FontFamily.SemiBold, color: Colors.primary }}
                children={
                    <MaterialIconWrapper
                        iconSize={20}
                        iconName={modalVisible ? 'expand-less' : 'expand-more'}
                        iconColor={Colors.primary}
                    />
                }
            />
            <FilterPopup
                distribution={distribution}
                filters={filters}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedFilter={selectedFilter}
                selectFilter={selectFilter}
                deselectFilter={deselectFilter}
                clearAllFilter={clearAllFilters}
            />
        </View>
    );
};

export default FilterUi;

const styles = StyleSheet.create({
    filterContainer: {
        height: '100%',
        paddingHorizontal: '2%',
        borderStartWidth: 0.2,
        borderColor: Colors.borderColorPrimary,
    },
});

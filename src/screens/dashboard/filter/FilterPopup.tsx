import { IRFilter } from '@app/api/product/product.interface';
import Border from '@app/screens/components/border/Border';
import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors, { colorCode } from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, BR, FDR, FLEX, JCC, MR, MT, PH, PV } from '@app/utilities/Styles';
import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import DistributionItem from './component/DistributionItem';
import FitlerHeading from './component/FilterHeading';

interface FilterPopupI {
    filters: IRFilter[];
    distribution: IRFilter[];
    modalVisible: boolean;
    setModalVisible: Function;
    selectedFilter: { [key: string]: string[] };
    selectFilter: (type: string, value: string) => void;
    deselectFilter: (type: string, value: string) => void;
}

const FilterPopup = ({
    modalVisible,
    setModalVisible,
    distribution,
    filters,
    selectedFilter,
    selectFilter,
    deselectFilter,
}: FilterPopupI) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
            // onDismiss={() => {
            //     setModalVisible(!modalVisible);
            // }}
            statusBarTranslucent
            presentationStyle="overFullScreen"
        >
            <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#00000066' }}>
                <View style={styles.modalView}>
                    <View
                        style={[
                            FDR(),
                            AIC(),
                            JCC('space-between'),
                            PV(0.1),
                            PH(0.3),
                            { borderBottomWidth: 0.2, borderColor: Colors.light },
                        ]}
                    >
                        <View style={[FLEX(1), MR(0.3)]}>
                            <HeaderWithTitleAndSubHeading
                                heading="Select Filters"
                                subHeading="Help us know what you like by selecting filter. So that we can provide you product of your choice"
                                headerStyle={{ fontSize: 18, fontFamily: FontFamily.SemiBold }}
                                subHeaderStyle={{ color: '#7d7d7d' }}
                            />
                            {/* <Text style={styles.modalText}>Select Filters</Text>
                            <Text style={styles.modalText}>Help us know by selecting filter</Text> */}
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose, BGCOLOR(colorCode.CHAKRALOW(20))]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <TextBasic
                                text="Close"
                                textColor={Colors.primary}
                                fontFamily={FontFamily.Light}
                                fontSize={14}
                            />
                        </Pressable>
                    </View>
                    <ScrollView contentContainerStyle={{ paddingHorizontal: '3%' }}>
                        {distribution &&
                            distribution.map((item) => (
                                <View style={[MT(0.2)]} key={item._id}>
                                    <FitlerHeading heading={item.name} subHeading={item.description} />
                                    <View style={[FDR(), { flexWrap: 'wrap' }, MT(0.1)]}>
                                        {item.values.map((value, index) => {
                                            let selectedValues = selectedFilter[item.type];
                                            let selected = selectedValues && selectedValues.includes(value._id);
                                            return (
                                                <DistributionItem
                                                    key={item._id + value._id}
                                                    item={{ ...item, values: undefined }}
                                                    value={value}
                                                    selected={selected}
                                                    onPress={() => {
                                                        if (!selected) {
                                                            selectFilter(item.type, value._id);
                                                        } else {
                                                            deselectFilter(item.type, value._id);
                                                        }
                                                    }}
                                                />
                                            );
                                        })}
                                    </View>
                                    <Border />
                                </View>
                            ))}

                        {filters &&
                            filters.map((item) => (
                                <View style={[MT(0.2)]}>
                                    <FitlerHeading heading={item.name} subHeading={item.description} />

                                    <View style={[FDR(), { flexWrap: 'wrap' }, MT(0.1)]}>
                                        {item.values.map((value, index) => {
                                            let selectedValues = selectedFilter[item.type];
                                            let selected = selectedValues && selectedValues.includes(value._id);

                                            return (
                                                <DistributionItem
                                                    key={item._id + value._id}
                                                    item={{ ...item, values: undefined }}
                                                    value={value}
                                                    selected={selected}
                                                    onPress={() => {
                                                        if (!selected) {
                                                            selectFilter(item.type, value._id);
                                                        } else {
                                                            deselectFilter(item.type, value._id);
                                                        }
                                                    }}
                                                />
                                            );
                                        })}
                                    </View>
                                    <Border />
                                </View>
                            ))}
                    </ScrollView>
                    <Border borderWidth={0.8} marginTop={0} />
                    <View style={[FDR(), AIC(), JCC('space-between'), PV(0.15), PH(0.3)]}>
                        <View>
                            <Text style={styles.modalText}>Reset Filters</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Apply Filters</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        // margin: 20,

        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        height: '70%',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    button: {
        //elevation: 2,
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 5,
        backgroundColor: Colors.primary,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        //  backgroundColor: Colors.light,
    },
    textStyle: {
        color: Colors.white,

        textAlign: 'center',
    },
    modalText: {
        //marginBottom: 15,
        //textAlign: 'center',
    },
});

export default FilterPopup;

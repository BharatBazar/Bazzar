import { classifierTypes, IRFilter } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors, { mainColor } from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, BR, FDR, JCC, ML, MT, PH, PV } from '@app/utilities/Styles';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';

interface FilterPopupI {
    filters: IRFilter[];
    distribution: IRFilter[];
    modalVisible: boolean;
    setModalVisible: Function;
}

const FilterPopup = ({ modalVisible, setModalVisible, distribution, filters }: FilterPopupI) => {
    return (
        <Modal
            animationType="fade"
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
            <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#00000033' }}>
                <View style={styles.modalView}>
                    <View
                        style={[
                            FDR(),
                            AIC(),
                            JCC('space-between'),
                            PV(0.1),
                            PH(0.3),
                            { borderBottomWidth: 1, borderColor: Colors.light },
                        ]}
                    >
                        <View>
                            <Text style={styles.modalText}>Select Filters</Text>
                            <Text style={styles.modalText}>Help us know by selecting filter</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                    <ScrollView contentContainerStyle={{ paddingHorizontal: '3%' }}>
                        {distribution &&
                            distribution.map((item) => (
                                <View style={[MT(0.2)]}>
                                    <TextBasic text={item.name} fontSize={14} fontFamily={FontFamily.Bold} />
                                    <TextBasic text={item.description} fontSize={12} textColor={Colors.primary} />
                                    <View style={[FDR(), { flexWrap: 'wrap' }, MT(0.1)]}>
                                        {item.values.map((value) => (
                                            <View
                                                style={[
                                                    ML(0.1),
                                                    BR(0.05),
                                                    { padding: 4 },
                                                    BGCOLOR(Colors.light),
                                                    FDR(),
                                                    AIC(),
                                                ]}
                                            >
                                                {item.type == classifierTypes.COLOR && (
                                                    <View
                                                        style={[
                                                            {
                                                                height: 15,
                                                                width: 15,
                                                                borderRadius: 3,
                                                                backgroundColor: value.description,
                                                            },
                                                        ]}
                                                    />
                                                )}
                                                <TextBasic
                                                    text={
                                                        value.name +
                                                        (item.type == classifierTypes.SIZE
                                                            ? ' ' + value.description
                                                            : '')
                                                    }
                                                    fontFamily={FontFamily.Medium}
                                                    textStyle={{ marginLeft: 5, marginTop: 0, padding: 0 }}
                                                />
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        {filters &&
                            filters.map((item) => (
                                <View style={[MT(0.2)]}>
                                    <TextBasic text={item.name} />
                                    <View style={[FDR(), { flexWrap: 'wrap' }, MT(0.1)]}>
                                        {item.values.map((value) => (
                                            <View style={[ML(0.1), BR(0.05), { padding: 4 }, BGCOLOR(Colors.light)]}>
                                                <TextBasic text={value.name} />
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            ))}
                    </ScrollView>
                    <View
                        style={[
                            FDR(),
                            AIC(),
                            JCC('space-between'),
                            PV(0.2),
                            PH(0.3),
                            { borderTopWidth: 2, borderColor: Colors.light },
                        ]}
                    >
                        <View>
                            <Text style={styles.modalText}>Apply Filters</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Reset Filters</Text>
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

        height: '80%',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        //  backgroundColor: Colors.light,
    },
    textStyle: {
        color: Colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        //marginBottom: 15,
        //textAlign: 'center',
    },
});

export default FilterPopup;

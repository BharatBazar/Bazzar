import { FilterAndValues, FilterValueData, IClassifier, IRFilter } from '@app/api/product/product.interface';
import Border from '@app/screens/components/border/Border';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors, { colorCode } from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, BR, FDR, FLEX, JCC, MH, MR, MT, PH, provideShadow, PV } from '@app/utilities/Styles';
import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import FilterValue from './component/FilterValue';
import FitlerHeading from './component/FilterHeading';

interface FilterPopupI {
    filters: FilterAndValues[];

    modalVisible: boolean;
    setModalVisible: Function;
    selectedFilter: { [key: string]: FilterValueData[] };
    selectFilter: (type: string, value: FilterValueData) => void;
    deselectFilter: (type: string, value: FilterValueData) => void;
    clearAllFilter: Function;
    applyFilter: Function;
}

const FilterPopup = ({
    modalVisible,
    setModalVisible,

    filters,
    selectedFilter,
    selectFilter,
    deselectFilter,
    clearAllFilter,
    applyFilter,
}: FilterPopupI) => {
    const [scrolled, setScrolled] = React.useState(false);
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
                            PV(0.2),
                            PH(0.3),
                            {
                                borderBottomWidth: 0.2,
                                borderColor: Colors.light,
                                borderTopRightRadius: 10,
                                borderTopLeftRadius: 10,
                            },
                            BGCOLOR('#FFFFFF'),
                            scrolled && provideShadow(3),
                        ]}
                    >
                        <View style={[FLEX(1), MR(0.3)]}>
                            <HeaderWithTitleAndSubHeading
                                heading="Select Filters"
                                subHeading="Help us know what you like by selecting filter. So that we can provide you product of your choice"
                                headerStyle={{ fontSize: 18, fontFamily: FontFamily.SemiBold }}
                                subHeaderStyle={{ color: '#7d7d7d', fontSize: 10 }}
                            />
                            {/* <Text style={styles.modalText}>Select Filters</Text>
                            <Text style={styles.modalText}>Help us know by selecting filter</Text> */}
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose, BGCOLOR(Colors.primaryLight)]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <TextBasic
                                text="Close"
                                textColor={Colors.primary}
                                fontFamily={FontFamily.SemiBold}
                                fontSize={14}
                            />
                        </Pressable>
                    </View>
                    <ScrollView
                        contentContainerStyle={{ paddingHorizontal: '3%' }}
                        onScroll={({
                            nativeEvent: {
                                contentOffset: { x, y },
                            },
                        }) => {
                            if (y > 0) {
                                if (!scrolled) setScrolled(true);
                            } else {
                                if (scrolled) setScrolled(false);
                            }
                        }}
                    >
                        {filters &&
                            filters.map((item) => (
                                <View style={[MT(0.2)]}>
                                    <FitlerHeading
                                        heading={item.customerHeading}
                                        subHeading={item.customerDescription}
                                    />

                                    <View style={[FDR(), { flexWrap: 'wrap' }, MT(0.1)]}>
                                        {item.values.map((value, index) => {
                                            let selectedValues = selectedFilter[item.key];
                                            let selected =
                                                selectedValues &&
                                                selectedValues.findIndex((item) => item._id == value._id) > -1;

                                            return (
                                                <FilterValue
                                                    key={item._id + value._id}
                                                    item={{ ...item, values: undefined }}
                                                    value={value}
                                                    selected={selected}
                                                    onPress={() => {
                                                        if (!selected) {
                                                            selectFilter(item.key, value);
                                                        } else {
                                                            deselectFilter(item.key, value);
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

                    <View
                        style={[
                            FDR(),
                            AIC(),
                            JCC('space-between'),
                            PV(0.15),
                            MH(0.5),
                            { borderTopWidth: 0.2, borderTopColor: Colors.light },
                        ]}
                    >
                        <ButtonRippleText
                            buttonTextColor={Colors.primary}
                            textStyle={{ fontFamily: FontFamily.Bold, fontSize: 12 }}
                            containerStyle={[
                                {
                                    borderWidth: 0.2,
                                    borderColor: Colors.borderColorPrimary,
                                    borderRadius: 4,
                                    padding: 10,
                                },
                            ]}
                            onPress={() => {
                                clearAllFilter();
                            }}
                            buttonText="Clear Filters"
                        />
                        <ButtonRippleText
                            buttonTextColor={Colors.primary}
                            textStyle={{ fontFamily: FontFamily.Bold, fontSize: 12, color: '#FFFFFF' }}
                            containerStyle={[
                                {
                                    borderRadius: 4,
                                    padding: 10,
                                },
                                BGCOLOR(Colors.primary),
                            ]}
                            onPress={() => {
                                applyFilter();
                            }}
                            buttonText="Apply Filters"
                        />
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

        height: '75%',

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
        paddingHorizontal: 10,
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

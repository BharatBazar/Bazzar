import Colors, { mainColor } from '@app/utilities/Colors';
import { AIC, FDR, JCC, PH, PV } from '@app/utilities/Styles';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
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
                    </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>{'Filters'}</Text>
            </Pressable>
        </View>
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
        borderRadius: 10,

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

export default App;

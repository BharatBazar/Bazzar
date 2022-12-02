import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { FastImageWrapper } from '../../../components/FastImage';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <FastImageWrapper
                imageStyle={styles.image}
                source={{
                    uri: 'https://images-na.ssl-images-amazon.com/images/G/31/img21/shoes/February/SS21/MS/PC/SBC3/SBC-Mens-footwear-3._SY530_QL85_.jpgD',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width,
        height: height / 3,
        backgroundColor: 'white',
        // margin: 10,
        //borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        //width: width - 20,
        height: height / 3,
        //borderRadius: 10,
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5,
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default CarouselItem;

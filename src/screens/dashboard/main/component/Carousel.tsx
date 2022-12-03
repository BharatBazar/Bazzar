import { getHP, getWP } from '@app/utilities/Dimensions';
import { HP } from '@app/utilities/Styles';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';

import CarouselItem from './CarouselItem';

const { width } = Dimensions.get('window');

const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);
    let flatList = React.useRef();

    useEffect(() => {
        setDataList(data);
        //  infiniteScroll(dataList);
    }, []);

    function infiniteScroll(dataList) {
        const numberOfData = dataList.length;
        let scrollValue = 0,
            scrolled = 0;

        setInterval(function () {
            scrolled++;
            if (scrolled < numberOfData) scrollValue = scrollValue + width;
            else {
                scrollValue = 0;
                scrolled = 0;
            }

            flatList.current.scrollToOffset({ animated: true, offset: scrollValue });
        }, 3000);
    }

    if (data && data.length) {
        return (
            <View style={[HP(3)]}>
                <FlatList
                    data={data}
                    ref={(flatListt) => {
                        flatList.current = flatListt;
                    }}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />;
                    }}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let backgroundColor = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: ['#00000000', '#FFFFFF', '#00000000'],
                            extrapolate: 'clamp',
                        });
                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    //opacity,
                                    height: getHP(0.08),
                                    width: getHP(0.08),
                                    borderColor: '#FFFFFF',
                                    borderWidth: 1,
                                    backgroundColor: backgroundColor,
                                    margin: 3,
                                    borderRadius: 5,
                                }}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }

    console.log('Please provide Images');
    return null;
};

const styles = StyleSheet.create({
    dotView: {
        position: 'absolute',
        backgroundColor: '#0000001A',
        borderRadius: getWP(2),
        paddingHorizontal: getWP(0.1),
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: getHP(0.1),
        alignSelf: 'center',
    },
});

export default Carousel;

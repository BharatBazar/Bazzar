import { getHP, getWP } from '@app/utilities/Dimensions';
import { HP } from '@app/utilities/Styles';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

interface CarouselProps {
    data: string[];
    renderItem: Function;
    height: number;
    width: number;
}
const Carousel: React.FunctionComponent<CarouselProps> = ({ data, renderItem, height, width }) => {
    let flatListRef = React.useRef(null);
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    let scrollValue = React.useRef(0).current;
    let scrolled = React.useRef(0).current;
    let timer: any = null;

    const setSlideTimer = (x: number) => {
        scrollValue = x + width;
        scrolled = parseInt(x) / parseInt(width);

        if (parseInt(scrolled) == data.length) {
            setSlideTimer(0 - width);
        } else
            timer = setTimeout(() => {
                if (flatListRef && flatListRef.current) {
                    flatListRef.current.scrollToOffset({
                        animated: true,
                        offset: scrollValue,
                    });
                    setSlideTimer(scrollValue);
                }
            }, 3000);
    };

    useEffect(() => {
        return () => {
            console.log('Timer is cleared carousel');
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, []);

    useEffect(() => {
        // if (data.length > 0) {
        //     setSlideTimer(0);
        // }
        return () => {
            console.log('Timer is cleared carousel');
            if (timer) {
                // clearTimeout(timer);
            }
        };
    }, [data]);

    if (data && data.length) {
        return (
            <View style={{ height: height, width: width }}>
                <FlatList
                    data={data}
                    ref={flatListRef}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return renderItem(item);
                    }}
                    onMomentumScrollEnd={({
                        nativeEvent: {
                            contentOffset: { x, y },
                        },
                    }) => {
                        // if (timer) {
                        //     clearTimeout(timer);
                        //     setSlideTimer(x);
                        // } else setSlideTimer(x);
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
                                style={[
                                    {
                                        backgroundColor: backgroundColor,
                                    },
                                    styles.dotStyle,
                                ]}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }

    return null;
};

const styles = StyleSheet.create({
    dotView: {
        position: 'absolute',
        backgroundColor: '#00000066',
        borderRadius: getWP(2),
        paddingHorizontal: getWP(0.1),
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: getHP(0.1),
        alignSelf: 'center',
    },
    dotStyle: {
        //opacity,
        height: 10,
        width: 10,
        borderColor: '#FFFFFF',
        borderWidth: 1,

        margin: 3,
        borderRadius: 5,
    },
});

export default Carousel;

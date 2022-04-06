import Colors from '@app/utilities/Colors';
import { getHP, getWP } from '@app/utilities/Dimensions';
import * as React from 'react';
import { ImageStyle, StyleProp, View, StyleSheet, Animated } from 'react-native';
import FastImage, { ResizeMode, Priority } from 'react-native-fast-image';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface FastImageLoaderWithBgProps {
    style?: StyleProp<ImageStyle>;
    resizeMode?: ResizeMode;
    source: {
        uri: string;
        header?: Object;
        priority?: Priority;
    };
}

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

export const FastImageLoaderWithBg = ({ style, resizeMode, source }: FastImageLoaderWithBgProps) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    let Image = React.useRef(new Animated.Value(0)).current;
    let defaultImage = React.useRef(new Animated.Value(1)).current;

    const animateImage = (component: Animated.Value, toValue: number) => {
        Animated.timing(component, {
            toValue,
            duration: 400,
            useNativeDriver: true,
        }).start(() => {});
    };
    return (
        <View style={[style || { width: getWP(2), height: getHP(1) }]}>
            <AnimatedFastImage
                style={[style || { width: getWP(2), height: getHP(1) }, { opacity: Image }]}
                source={source}
                resizeMode={resizeMode || FastImage.resizeMode.contain}
                onLoad={() => {
                    animateImage(Image, 1);
                    animateImage(defaultImage, 0);
                }}
            />
            {!imageLoaded && (
                <Animated.View style={[styles.defaultImage, { opacity: defaultImage }]}>
                    <MaterialIcon name={'collections'} color={Colors.blackShadePrimary} size={28} />
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    defaultImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        alignItems: 'center',
        justifyContent: 'center',
    },
});

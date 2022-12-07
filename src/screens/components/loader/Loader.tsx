import Colors from '@app/utilities/Colors';
import { AIC, BGCOLOR, JCC, provideShadow } from '@app/utilities/Styles';
import { BRA, PA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

interface LoaderProps {}

const Loader: React.FunctionComponent<LoaderProps> = () => {
    return (
        <View style={[AIC(), JCC(), styles.loaderContainer]}>
            <View style={[provideShadow(3), BGCOLOR(Colors.white), PA(), BRA()]}>
                <ActivityIndicator color={Colors.primary} size={'small'} />
            </View>
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    loaderContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff33' },
});

import { AIC, JCC } from '@app/utilities/Styles';
import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

interface LoaderProps {}

const Loader: React.FunctionComponent<LoaderProps> = () => {
    return (
        <View style={[AIC(), JCC(), styles.loaderContainer]}>
            <ActivityIndicator color={'#000000'} size={'large'} />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    loaderContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff33' },
});

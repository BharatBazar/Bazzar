import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { AIC, FDR, FLEX, HP, ML, PH, provideShadow, PV } from '../../../../common/styles';
import Ripple from 'react-native-material-ripple';
import WrappedText from '../../../components/WrappedText';
import IconIcons from 'react-native-vector-icons/Ionicons';
import { fs16, fs20 } from '../../../../common';
import { getHP, getWP } from '../../../../common/dimension';

export interface SearchProps {
    onPressSearchBar: Function;
}
const buttonProps = { size: fs20, style: { height: fs20, width: fs20 }, color: '#FFFFFF' };

const Search: React.SFC<SearchProps> = ({ onPressSearchBar }) => {
    return (
        <View style={[{ paddingBottom: getHP(0.15) }, PH(0.2)]}>
            <Ripple
                style={[styles.containerStyle, FDR(), AIC()]}
                onPress={() => {
                    onPressSearchBar();
                }}
            >
                <IconIcons name={'search'} {...buttonProps} color={'#000000' + '66'} />
                <View style={[FLEX(1)]}>
                    <WrappedText
                        text={'koisi bhi dukan ko dhundhe'}
                        textColor={'#000000' + '66'}
                        textStyle={[ML(0.2)]}
                        fontSize={fs16}
                    />
                </View>
            </Ripple>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: getHP(0.05),

        paddingHorizontal: '2%',
        height: getHP(0.5),

        elevation: 10,
    },
    textInputStyle: {
        padding: 0,
        marginLeft: getWP(0.2),
    },
});

export default Search;

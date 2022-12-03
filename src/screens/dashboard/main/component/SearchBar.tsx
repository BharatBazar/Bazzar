import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { AIC, FDR, FLEX, ML, PH } from '@app/utilities/Styles';
import Ripple from 'react-native-material-ripple';
import IconIcons from 'react-native-vector-icons/Ionicons';

import { getHP, getWP } from '@app/utilities/Dimensions';
import TextBasic from '@app/screens/components/text/TextBasic';

export interface SearchProps {
    onPressSearchBar: Function;
}
const buttonProps = { size: 20, style: { height: 20, width: 20 }, color: '#FFFFFF' };

const Search: React.FC<SearchProps> = ({ onPressSearchBar }) => {
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
                    <TextBasic
                        text={'koisi bhi dukan ko dhundhe'}
                        textColor={'#000000' + '66'}
                        textStyle={[ML(0.2)]}
                        fontSize={16}
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

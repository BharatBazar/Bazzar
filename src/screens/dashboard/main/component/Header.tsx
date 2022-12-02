import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { mainColor } from '../../../../common/color';
import { BGCOLOR, FDR, HP, JCC, PH } from '../../../../common/styles';
import { fs22, fs30 } from '../../../../common';
import WrappedRoundButton from '../../../components/WrappedRoundButton';
import { getHP, getWP } from '../../../../common/dimension';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchBar from './SearchBar';

export interface HeaderProps {
    onPressSearchBar: Function;
}

const buttonProps = { size: fs22, style: { height: fs22, width: fs22 }, color: '#FFFFFF' };

const Header: React.FC<HeaderProps> = ({ onPressSearchBar }) => {
    return (
        <View style={[BGCOLOR(mainColor)]}>
            <View style={[FDR(), JCC('space-between'), HP(0.6), PH(0.1)]}>
                <View style={[]}>
                    <WrappedRoundButton onPress={() => {}}>
                        <MaterialIcons
                            name={'menu'}
                            {...buttonProps}
                            size={fs30}
                            style={{ height: fs30, width: fs30 }}
                        />
                    </WrappedRoundButton>
                </View>

                <View style={[FDR()]}>
                    <WrappedRoundButton onPress={() => {}}>
                        <MaterialIcons name={'notifications'} {...buttonProps} />
                    </WrappedRoundButton>
                    <WrappedRoundButton containerStyle={{}} onPress={() => {}}>
                        <MaterialIcons name={'shopping-cart'} {...buttonProps} />
                    </WrappedRoundButton>
                </View>
            </View>

            <SearchBar onPressSearchBar={onPressSearchBar} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: getHP(0.05),
        width: '100%',
        paddingHorizontal: '2%',
        height: getHP(0.5),
    },
    textInputStyle: {
        padding: 0,
        marginLeft: getWP(0.2),
    },
});

export default Header;

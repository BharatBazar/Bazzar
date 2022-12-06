import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { BGCOLOR, FDR, HP, JCC, PH } from '@app/utilities/Styles';

import SearchBar from './SearchBar';
import ButtonMaterialIcons from '@app/screens/components/button/ButtonMaterialIcons';
import { mainColor } from '@app/utilities/Colors';
import { getHP, getWP, STATUS_BAR_HEIGHT } from '@app/utilities/Dimensions';
import { PTA } from '@app/utilities/StyleWrapper';

export interface HeaderProps {
    onPressSearchBar: Function;
}

const buttonProps = { size: 22, style: { height: 22, width: 22 }, color: '#FFFFFF' };

const Header: React.FC<HeaderProps> = ({ onPressSearchBar }) => {
    return (
        <View style={[BGCOLOR(mainColor), PTA(STATUS_BAR_HEIGHT)]}>
            <View style={[FDR(), JCC('space-between'), PH(0.1)]}>
                <View style={[]}>
                    <ButtonMaterialIcons iconName="menu" iconSize={25} onPress={() => {}} />
                </View>

                <View style={[FDR()]}>
                    <ButtonMaterialIcons iconName="notifications" iconSize={25} onPress={() => {}} />
                    <ButtonMaterialIcons iconName="shopping-cart" iconSize={25} onPress={() => {}} />
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

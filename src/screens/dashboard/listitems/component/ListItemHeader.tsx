import BasicHeader from '@app/screens/components/header/HeaderBasic';
import * as React from 'react';
import { View, Animated } from 'react-native';
import { AIC, FDR } from '@app/utilities/Styles';
import ButtonMaterialIcons from '@app/screens/components/button/ButtonMaterialIcons';
import { catalogueData } from '@app/api/catalogue/catalogue.interface';

interface HeaderLIProps {
    item: catalogueData;
}

const HeaderLI: React.FunctionComponent<HeaderLIProps> = ({ item }) => {
    return (
        <BasicHeader
            title={item.type.split('-').join(' ')}
            rightComponent={
                <View style={[FDR(), AIC()]}>
                    <ButtonMaterialIcons iconName={'search'} iconSize={25} onPress={() => {}} />
                    <ButtonMaterialIcons iconName={'favorite'} iconSize={22} onPress={() => {}} />
                    <ButtonMaterialIcons iconName={'chat'} iconSize={22} onPress={() => {}} />
                </View>
            }
        />
    );
};

export default HeaderLI;

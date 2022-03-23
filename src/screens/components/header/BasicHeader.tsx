import Colors, { mainColor } from '@app/utilities/Colors';
import { AIC, FDR, FLEX } from '@app/utilities/Styles';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonMaterialIcons from '../button/ButtonMaterialIcons';
import TextBasic from '../text/TextBasic';

interface BasicHeaderProps {
    title: string;
}

const BasicHeader: React.FunctionComponent<BasicHeaderProps> = ({ title }) => {
    const navigation = useNavigation();

    let goBack = React.useMemo(() => navigation.canGoBack(), [navigation]);

    return (
        <View style={styles.headerContainer}>
            <View style={[FDR(), AIC(), FLEX(1)]}>
                {!goBack && <ButtonMaterialIcons iconName={'arrow-back'} iconSize={25} onPress={() => {}} />}
                <TextBasic text={title} textColor={Colors.white} fontSize={18} textStyle={{ marginLeft: 5 }} />
            </View>
            <View style={[FDR(), AIC()]}>
                <ButtonMaterialIcons iconName={'search'} iconSize={27} onPress={() => {}} />
                <ButtonMaterialIcons iconName={'favorite'} iconSize={25} onPress={() => {}} />
                <ButtonMaterialIcons iconName={'chat'} iconSize={25} onPress={() => {}} />
            </View>
        </View>
    );
};

export default BasicHeader;

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: mainColor,
        paddingHorizontal: '3%',
    },
});

import Colors, { mainColor } from '@app/utilities/Colors';
import { STATUS_BAR_HEIGHT } from '@app/utilities/Dimensions';
import { AIC, colorTransparency, FDR, FLEX, JCC, provideShadow } from '@app/utilities/Styles';
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
            <View style={{ height: STATUS_BAR_HEIGHT, width: '100%', backgroundColor: Colors.primary }} />
            <View
                style={[
                    FDR(),
                    JCC('space-between'),
                    AIC('center'),
                    FLEX(1),
                    provideShadow(1),
                    { backgroundColor: Colors.primary, elevation: 1 },
                ]}
            >
                <View style={[FDR(), AIC(), FLEX(1)]}>
                    {!goBack && <ButtonMaterialIcons iconName={'arrow-back'} iconSize={25} onPress={() => {}} />}
                    <TextBasic text={title} textColor={Colors.white} fontSize={18} textStyle={{ marginLeft: 5 }} />
                </View>
                <View style={[FDR(), AIC()]}>
                    <ButtonMaterialIcons iconName={'search'} iconSize={25} onPress={() => {}} />
                    <ButtonMaterialIcons iconName={'favorite'} iconSize={22} onPress={() => {}} />
                    <ButtonMaterialIcons iconName={'chat'} iconSize={22} onPress={() => {}} />
                </View>
            </View>
        </View>
    );
};

export default BasicHeader;

const styles = StyleSheet.create({
    headerContainer: {
        height: 60 + STATUS_BAR_HEIGHT,
        width: '100%',
    },
});

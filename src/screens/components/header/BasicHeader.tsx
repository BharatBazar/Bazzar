import { FDR } from '@app/utilities/Styles';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonFeatherIcon from '../button/ButtonFeatherIcon';
import TextBasic from '../text/TextBasic';

interface BasicHeaderProps {
    title: string;
}

const BasicHeader: React.FunctionComponent<BasicHeaderProps> = ({ title }) => {
    const navigation = useNavigation();

    let goBack = React.useMemo(() => navigation.canGoBack(), [navigation]);

    return (
        <View style={styles.headerContainer}>
            <View style={[FDR()]}>
                {!goBack && <ButtonFeatherIcon iconName={'chevron-left'} onPress={() => {}} />}
                <TextBasic text={title} />
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
    },
});

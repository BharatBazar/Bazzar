import * as React from 'react';
import { View } from 'react-native';
import { applyColorCode, colorCode, mainColor } from '../../../common/color';
import { BGCOLOR, FLEX } from '../../../common/styles';
import Header from './component/Header';
import StatusBar from '../../components/StatusBar';
import { NavigationProps } from '../../../common';
import { NavigationKey } from '../../../labels';
import Category from './category/Category';
import Carousel from './component/Carousel';
import { ScrollView } from 'react-native-gesture-handler';

export interface DashboardProps extends NavigationProps {}

const Dashboard: React.SFC<DashboardProps> = ({ navigation }) => {
    return (
        <View style={[FLEX(1)]}>
            <StatusBar statusBarColor={mainColor} />

            <Header
                onPressSearchBar={() => {
                    navigation.navigate(NavigationKey.SEARCHSCREEN);
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Carousel data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]} />
                <Category />
            </ScrollView>
        </View>
    );
};

export default Dashboard;

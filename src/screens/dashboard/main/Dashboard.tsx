import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationKey } from '@app/navigation/navigation-data';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';
import { NavigationContainerProps } from '@react-navigation/native';
import Category from './category/Category';
import Carousel from './component/Carousel';
import Header from './component/Header';

import { colorCode } from '@app/utilities/Colors';

export interface DashboardProps extends NavigationContainerProps {}

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
    return (
        <View style={[FLEX(1), BGCOLOR(colorCode.WHITE)]}>
            <Header
                onPressSearchBar={() => {
                    navigation.navigate(NavigationKey.SearchProduct);
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

import { IClassfier } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import * as React from 'react';
import { View } from 'react-native';
import FilterValue from './FilterValue';

interface ShowAppliedFilterValuesProps {
    selectedFilter: { [key: string]: IClassfier[] };
}

const ShowAppliedFilterValues: React.FunctionComponent<ShowAppliedFilterValuesProps> = ({ selectedFilter }) => {
    return Object.keys(selectedFilter).length > 0 ? (
        Object.keys(selectedFilter).map((item) =>
            selectedFilter[item].map((value: IClassfier) => (
                <FilterValue
                    marginTop={1}
                    key={value._id}
                    item={{ type: item, values: undefined }}
                    value={value}
                    selected={true}
                    onPress={() => {
                        // if (!selected) {
                        //     selectFilter(item.type, value);
                        // } else {
                        //     deselectFilter(item.type, value);
                        // }
                    }}
                />
            )),
        )
    ) : (
        <TextBasic
            text="Click on filter to find you perfect product match"
            textColor={Colors.primaryLight}
            fontSize={12}
        />
    );
};

export default ShowAppliedFilterValues;
